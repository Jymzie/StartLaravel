<template>
  <div :style="sStyle">
      
           
           <v-dialog v-model="AddDialog" max-width="30%" persistent>
                <v-card>
                    <v-card-title class=" mb-4" style="background-color: #4169E1;color:white" >Convert Data <v-spacer/>
                        <!-- <v-icon @click="mCloseAdd">mdi-close</v-icon> -->
                    </v-card-title>
                    <v-card-text>
                                <v-file-input v-model="file"></v-file-input>
              
                        <v-btn block @click="mAddUpDown" :disabled="file==null ? true : false">
                            <v-progress-circular
                            color="primary"
                            indeterminate
                            v-show="uploading == true ? true : false"
                            ></v-progress-circular>

                             Convert</v-btn>
                    </v-card-text>
                    
                </v-card>
              
           </v-dialog>
     
   </div>
</template>

<script>
export default {
    data(){
        return{
            UpDownTableHeader:['Name','Actions'],
            UpDownTableData:[{filename:1+'.jpg'},{filename:2+'.jpg'},{filename:3+'.jpg'},{filename:4+'.jpg'}],
            file:null,
            AddDialog:true,
            uploading:false,
            filename:''
        }
    },
    created(){
        // this.mUpDown()
    },
    methods:{
        mUpDown(){
            axios.get(`${this.$url}/api/UpDown`)
            .then(res=>{
                this.UpDownTableData = res.data
            }).catch(({response})=>{
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            })
        },
        mShowAdd(){
            this.AddDialog = true
        },
        mCloseAdd(){
            // this.AddDialog = false
            this.file = null
        },
        mAddUpDown(){
           const formData = new FormData()
           formData.append("image",this.file)
           console.log(formData)
           this.uploading = true
                axios.post(`${this.$url}/api/UpDown`,formData)
                .then(res => {
                    this.uploading = false
                    alert('Reading data... Please wait!')
                    this.mCloseAdd()
                    // this.mUpDown()
                    // this.mEmployeeList()
                }).catch(({response})=>{
                    if(response.status == 400){
                        console.log(response)
                        alert(response.data)
                    }else{
                        this.$store.dispatch('setStatusCode', response.status)
                        this.$router.push('/error/' + response.status)
                    }
                })
            
            
        },
        mDownload(item){
            this.filename = item.filename
            this.uploading = true
            axios.get(`${this.$url}/api/UpDown/create?filename=${item.filename}`, {responseType: 'blob'})
            .then(res => {
                
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement("a");
                link.href = url
                link.setAttribute("download", item.filename)
                document.body.appendChild(link)
                link.click();
                link.remove();
                 this.uploading = false
                 this.filename = ''
                }).catch(({response})=>{
                    if(response.status == 400){
                        console.log(response)
                        alert(response.data)
                    }else{
                        this.$store.dispatch('setStatusCode', response.status)
                        this.$router.push('/error/' + response.status)
                    }
                })
        }
         
    },
       computed:{
         sStyle(){
            return {
                height: this.$vuetify.breakpoint.height+'px'
            }
        }
    }
}
</script>