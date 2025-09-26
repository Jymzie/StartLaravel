<template>
    <div class="app d-flex  justify-center ">
      <videoplayer
        class="videoplayer"
        id="videoplayer"
        :src="'storage/'+currentvid"
        :muted="false"
        :autoplay="true"
        :controls="true"
        :loop="false"  
        @play="onPlayerPlay"
        @pause="onPlayerPause"
        @ended="onPlayerEnded"
        @loadeddata="onPlayerLoadeddata"
        @waiting="onPlayerWaiting"
        @playing="onPlayerPlaying"
        @canplay="onPlayerCanplay"
        @canplaythrough="onPlayerCanplaythrough"
        @statechanged="playerStateChanged"
      >
      <!-- @timeupdate="onPlayerTimeupdate" -->
        <template
          v-slot:controls="{
            toggleNext
          }"
        >
          <div class="videoplayer-controls">
            <v-col cols="1" class="ml-n2 mt-n1">
              <v-btn @click="onNext(),toggleNext()" class="videoplayer-controls-toggleplay"
              color="black">
                <v-icon color="white">
                  mdi-skip-next
                </v-icon>
              </v-btn>
            </v-col>
            
            <v-col cols="2"  v-for="(item,i) in LimitQueue" :key="i">
              <div class="text-center b">
                {{ item.Title }} 
              </div>
            </v-col>
            <v-col cols="1" v-if="list.length > 6">
              <div class="text-center c">
                ...
              </div>
               
            </v-col>
          </div>
        </template>
      </videoplayer>
    </div>
  </template>
  <script>
  import videoplayer from "../components/vidplay";
  import videoplayerTrack from "../components/videotrack";
  export default {
    components: {
      videoplayer,
      videoplayerTrack,
    },
    created(){
      this.mGetQueue()
     
      this.$socket.on('reloadme', () => {
            this.mGetQueue()
        });
    },
    data() {
      return {
        time: 0,
        list:[],
        currentvid:'video/Sample.mp4'
      };
    },
    methods: {
      onPlayerPlay({ event, player }) {
        console.log(event.type);
        player.setPlaying(true);
      },
      onPlayerPause({ event, player }) {
        console.log(event.type);
        player.setPlaying(false);
      },
      onPlayerEnded({ event, player }) {
        console.log(event.type);
        player.setPlaying(false);
        //delete ended song
        this.onNext()
        console.log(event.type);
        player.toggleNext()
       

      },
      onPlayerLoadeddata({ event }) {
        console.log(event.type);
      },
      onPlayerWaiting({ event }) {
        console.log(event.type);
      },
      onPlayerPlaying({ event }) {
        console.log(event.type);
      },
      onPlayerTimeupdate({ event }) {
        this.time = event.target.currentTime;
        console.log({ event: event.type, time: event.target.currentTime });
      },
      onPlayerCanplay({ event }) {
        console.log(event.type);
      },
      onPlayerCanplaythrough({ event }) {
        console.log(event.type);
      },
    
      playerStateChanged({ event }) {
        console.log(event.type);
      },

       mGetQueue(){
            axios.get(`api/play?mode=q`)
            .then(res=>{
                this.list = res.data
                
            })
            .finally(()=>{
              if(this.currentvid == 'video/Sample.mp4' && this.list.length != 0)
                  this.currentvid = this.list[0].Link
              else if(this.list.length != 0)
            this.currentvid = this.list[0].Link
            else
              this.currentvid = 'video/Sample.mp4'
            })
        },
        onNext(){
          axios.delete(`api/play/del`)
          .finally(()=>{
            //update queue
            this.$socket.emit('reload_data')
            //new set of video
         
          })
          
        }
    },
    computed:{
      LimitQueue(){
      
          let limit = this.list.slice(1)
          limit = limit.splice(0,5)
          return limit
       
        
      }
    }
  };
  </script>
  
  <style>
  
  
  .videoplayer-controls {
    display: flex;
    font: 0.8em sans-serif;
    width: 100%;
  }
  
  .videoplayer-controls-toggleplay,
  .videoplayer-controls-togglemute {
    flex: 1;
  }
  
  .videoplayer-controls-time {
    flex: 2;
    text-align: center;
    line-height: 2;
  }
  
  .videoplayer-controls-track {
    flex: 5;
    line-height: 2;
  }

  div.b {
  white-space: nowrap; 
  width: 130px; 
  overflow: hidden;
  padding: 2px;
  color: aliceblue;
  background-color: gray;
  text-overflow: ellipsis;
  border: 1px solid #000000;
  border-radius: 5%;
  font-size: 18px;
}
div.c {
  white-space: nowrap; 
  width: 40px;
  padding: 2px 0 2px 0;
  border: 1px solid #000000;
  color: aliceblue;
  background-color: gray;
  border-radius: 5%;
  font-size: 18px;
}
  </style>
  