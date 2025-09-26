<template>
  <div>
    <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
            <v-card color="black">
                <v-card-title>
                    <h1  style="color: white;">
                        List
                    </h1>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="10">
                            <v-text-field background-color="white" outlined dense v-model="search" placeholder="Search"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-btn @click="toupload = true">
                                <v-icon>
                                    mdi-upload
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                   
                    
                    <v-simple-table class="text-center" fixed-header :height="($vuetify.breakpoint.height)*.62">
                        <thead >
                            <tr >
                                <th class="text-center"  v-for="(header,i) in header" :key="i">{{ header }}</th>
                                <th class="text-center">Play</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr v-for="(data,j) in cFilter" :key="j">
                                <td v-for="(header,i) in header" :key="i">
                                    {{ data[header] }}
                                </td>
                                <td>
                                    
                                    <v-icon @click="mToQueue(data)">
                                        mdi-play
                                    </v-icon>
                                
                                </td>     
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>
            </v-card>
          
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
            <v-card color="black">
                <v-card-title>
                    <h1  style="color: white;">
                        Queue
                       
                    </h1>
                    <v-spacer/>
                    <v-btn  @click="mClear">
                            Clear
                        </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-simple-table  class="text-center" fixed-header :height="($vuetify.breakpoint.height)*.7">
                        <thead v-if="queue.length != 0">
                            <tr >
                                <th class="text-center"  v-for="(header,i) in cQueueHeader" :key="i">{{ header }}</th>
                                <th class="text-center">Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data,j) in queue" :key="j">
                                <td v-for="(header,i) in cQueueHeader" :key="i">
                                    {{ data[header] }}
                                </td>
                                <td>
                             
                                    <v-icon @click="mToCancel(data)">
                                        mdi-close
                                    </v-icon>
                            
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>
            </v-card>
           
        </v-col>
    </v-row>

    <!-- NOTE Upload Dialog  -->
    <v-dialog v-model="toupload" max-width="50%" persistent>
        <v-card>
            <v-card-title >Upload
            <v-spacer/>
                    <v-icon @click="mCloseUpload">mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="file.name" dense outlined></v-text-field>
                <v-file-input v-model="file.content" dense outlined></v-file-input>
                <v-btn block @click="mUpload" :disabled="file.name == '' || file.content == null ? true : false">
                    <v-progress-circular
                    color="primary"
                        :rotate="360"
                    :value="uploadProgress"
                    v-show="uploading == true ? true : false"
                    >{{ uploadProgress }}%</v-progress-circular>

                    Upload
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
   
  </div>
</template>

<script>
export default {
    created(){
      this.mGetList()
        this.mGetQueue()
        this.$socket.on('reloadme', () => {
            this.mGetQueue()
        });
    },
    data() {
      return {
        header:[],
        list:[],
        header2:[],
        queue:[],
        search:'',
        toupload:false,
        file:{name:'',content:null},
        uploading:false,
        uploadProgress:0

      };
    },
    methods:{
        mGetList(){
            axios.get(`api/play`)
            .then(res=>{
                if(res.data.length !=0){
                    this.list = res.data
                    this.header = Object.keys(res.data[0])
                }
                else{
                    this.list = []
                }
            })
        },
        mGetQueue(){
            axios.get(`api/play?mode=q`)
            .then(res=>{
                if(res.data.length !=0){
                    this.queue = res.data
                    this.header2 = Object.keys(res.data[0])
                }
                else{
                    this.queue = []
                }
            })
            
        },
        mToQueue(data){
            axios.post(`api/play`, data)
            .finally(()=>{
                this.$socket.emit('reload_data')
            })
        },
        //NOTE Upload
        mUpload(){
            const formData = new FormData()
            formData.append("name",this.file.name)
            formData.append("content",this.file.content)
            
            this.uploading = true
            axios.post(`${this.$url}/api/play`,formData,
            {
                onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                this.uploadProgress = percentCompleted;
                console.log(this.uploadProgress , 'loaded',progressEvent.loaded,'total',progressEvent.total )
            }}
            )
            .then(res => {
                this.toupload = false
                this.uploading = false
                alert('Video has been added!')
                this.mGetList()
                this.mCloseUpload()
            })
            // .catch(({response})=>{
            //     if(response.status == 400){
            //         console.log(response)
            //         alert(response.data)
            //     }else{
            //         this.$store.dispatch('setStatusCode', response.status)
            //         this.$router.push('/error/' + response.status)
            //     }
            // })
            
        },
        mCloseUpload(){
            this.toupload = false
            this.file = {name:'',content:null}
        },
        mClear(){
            axios.delete(`api/play/clear`)
            .finally(()=>{
                this.$socket.emit('reload_data')
            })
        },
        mToCancel(data){
            axios.delete(`api/play/cancel?no=${data.No}`)
            .finally(()=>{
                this.$socket.emit('reload_data')
            })
        }
    },
    computed:{
        cFilter(){
            if(this.search)
                return this.list.filter(rec => rec.Title.toUpperCase().includes(this.search.toUpperCase()))
            else
                return this.list
        },
        cQueueHeader(){
            if(this.header2)
                return this.header2.filter( rec => !rec.includes('Link'))
        },
    }
}
</script>

<style>

</style>