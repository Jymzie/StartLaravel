<template>
  <div>
    <div class="d-flex justify-center">
        <v-card  width="45%">
            <v-card-text>
                <div style="background-color: white; height: 70vh;">
                    <!-- ANCHOR The camera -->
                    <video
                        v-show="!isPhotoTaken"
                        class="video"
                        ref="camera"
                        autoplay
                        width="100%"
                        height="100%"
                    />
                    <!-- ANCHOR captured preview -->
                    <canvas
                        v-show="isPhotoTaken"
                        class="video"
                        id="photoTaken"
                        ref="canvas"
                    />
        
                </div>
            </v-card-text>
        
        </v-card>
    </div>
    <div class="text-center my-3" v-show="!isPhotoTaken">
        <v-btn fab x-large @click="mRecord">
            <v-icon v-if="!isRecording" x-large color="red">mdi-record</v-icon>
            <v-icon v-else x-large>mdi-stop</v-icon>
        </v-btn>
        <v-btn v-show="!isRecording" fab x-large @click="mCapture">
            <v-icon x-large>mdi-camera</v-icon>
        </v-btn>
        <v-btn  v-show="!isRecording" fab  @click="createCamera('full')">
            <v-icon>mdi-fullscreen</v-icon>
        </v-btn>      
      
    </div>
    <div class="text-center my-3" v-show="isPhotoTaken">
      <v-btn @click="savePicture" bottom class="text-center green white--text">
        <v-icon class="mr-5">mdi-content-save</v-icon>
        Save
      </v-btn>

      <v-btn
        @click="stopCameraStream"
        bottom
        class="text-center red white--text"
      >
        <v-icon class="mr-1">mdi-close</v-icon>
        Discard
      </v-btn>
    </div>

    <!-- ANCHOR FULL SCREEN  -->
    <v-dialog v-model="Fullscreen" fullscreen persistent>
      <v-card flat color="black">
        <v-card-text>
          <div class="text-center video-container">
            <video
              v-show="!isPhotoTaken"
              class="video"
              ref="camera"
              autoplay 
              width="63%"
            />
            <canvas
            style="width: 84%;"
              v-show="isPhotoTaken"
              class="video"
              id="photoTakenfull"
              ref="canvasfull"
            />
            <v-btn
              fab
              x-large
              @click="mCapture"
              class="text-center play-button"
              v-show="!isPhotoTaken"
            >
              <v-icon x-large color="primary">mdi-camera-outline</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              @click="Fullscreen = false"
              class="text-center close-button"
              v-show="!isPhotoTaken"
              color="red"
            >
              <v-icon small>mdi-close-thick</v-icon>
            </v-btn>
            <v-row v-show="isPhotoTaken" class="play-button">
              <v-col cols="6">
                <v-btn @click="savePicture" bottom class="text-center green white--text">
                  <v-icon class="mr-5">mdi-content-save</v-icon>
                  Save
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  @click="stopCameraStream"
                  bottom
                  class="text-center red white--text"
                >
                  <v-icon class="mr-1">mdi-close</v-icon>
                  Discard
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <!-- ANCHOR Saved photos -->
    <div style="background-color: gray;width: 100%;">
      <v-row>
        <v-col cols="2" v-for="(item,i) in photocount" :key="i">
          <v-img :src="'storage/Capture/Sample/image_'+(i+1)+'.jpg?'+Date()"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    isPhotoTaken: false,
    imageName: "TRRYY",
    ischangeorientation: "",
    isRecording: false,
    photocount: 0,
    window: {
      width: "",
      height: "",
    },
    Fullscreen: false
  }),
  created() {
    this.window = {
      width: screen.width,
      height: screen.height,
      orientation: screen.width > screen.height ? "Landscape" : "Portrait",
    };
    this.getPhotocount()
    this.createCamera()
  },
  mounted() {
    this.detectOrientation();
    window.addEventListener("resize", this.detectOrientation);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.detectOrientation);
  },
  beforeDestroy(){
    this.stopCameraStream('yes')
  },
  watch: {
    ischangeorientation(val, val1) {
      if (val != val1) {
        this.isPhotoTaken = true;
        this.isPhotoTaken = false;
      }
    }
  },
    methods: {
    detectOrientation() {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      this.$emit("orientationChange", isPortrait);
      this.window = {
        width: screen.width,
        height: screen.height,
        orientation: screen.width > screen.height ? "Landscape" : "Portrait",
      };
      this.ischangeorientation = isPortrait;
    },

    mRecord(){
      this.isRecording = !this.isRecording

      
    },

    mCapture() {
      this.isPhotoTaken = !this.isPhotoTaken;
      let ctx = this.$refs.canvas.getContext("2d");
      if(this.Fullscreen == true){
        ctx = this.$refs.canvasfull.getContext("2d");
      }
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      let newWidth = this.window.width ,
            newHeight = this.window.height;
        ctx.canvas.width = newWidth;
        ctx.canvas.height = newHeight;
     
      ctx.drawImage(this.$refs.camera, 0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    savePicture() {
      let canvas = document.getElementById("photoTaken");
      if(this.Fullscreen == true)
        canvas = document.getElementById("photoTakenfull");
      canvas.toBlob((blob) => {
        let paramsObj = {};
        paramsObj.title = "image";
        paramsObj.folder = "Capture";
        const file = new File([blob], this.imageName + ".jpg");
        const formData = new FormData();
        formData.append("file", file);
        formData.append("params", JSON.stringify(paramsObj));

        axios({
          method: "POST",
          url: `api/capture`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
            this.getPhotocount()
            this.stopCameraStream();
          })
          .catch( err => {
            let errorval = 500;
            if(err.response != null){
                errorval = err.response.status
            }
            else
                console.log(err)
            this.$store.dispatch('setStatusCode', errorval)
            this.$router.push('/error/' + errorval)
          });
      });
    },

    createCamera(val) {
        if(val){
            this.Fullscreen = true
        }
        
      const constraints = (window.constraints = {
        audio: true ,
        video: {
          facingMode: "environment",
        },
      });
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert("Failed to stream!");
        });
    },
    stopCameraStream(val) {
      this.isPhotoTaken = false

     if(val == 'yes'){
        let tracks = this.$refs.camera.srcObject.getTracks();
        tracks.forEach((track) => {
        track.stop();
      });
     }
     
    },
    getPhotocount(){
      axios.get(`api/capture`)
      .then(res=>{
        this.photocount = res.data
      })
    }
 
  },
}
</script>

<style>
.play-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 5%;
  left: 98%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

canvas {
  width: 100%;
  height: 95%;
}


</style>