<template>
    <v-card>
        <!-- <v-card-title class="cyan lighten-3">UpDown
            <v-spacer/>
            <v-btn @click="mShowAdd"
       
            >Upload</v-btn>
        </v-card-title> -->
        <v-card-text>            
          
           <v-simple-table class="pa-3" fixed-header height="500px">
                <!-- <thead>
                    <tr>
                        <th class="cyan lighten-1" v-for="(header,i) in UpDownTableHeader" :key="i">
                            {{header}}</th>
                    </tr>
                </thead> -->
                <tbody>
                    <tr v-for="(item,i) in UpDownTableData" :key="i">
                        <td class="TableBorder alignCenter">
                            <span @click="mDownload(item)">{{item}}</span>
                        </td>
                        <!-- <td class="TableBorder alignCenter">
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-progress-circular
                                        color="green"
                                        indeterminate
                                        v-show="uploading == true && item == filename ? true : false"
                                        ></v-progress-circular>
                                    <v-btn 
                                        fab 
                                        x-small 
                                        class="ma-1"
                                        v-on="on" 
                                        v-bind="attrs"
                                        color="#546E7A"
                                        v-show="item != filename ? true : false"
                                        @click="mDownload(item)"      
                                    >
                                        
                                        <v-icon color="#FFFFFF">mdi-arrow-down</v-icon>
                                    </v-btn>
                                </template>
                                <span class="spancolor">Download</span>
                            </v-tooltip>
                        </td> -->
                       
                    </tr>
                </tbody>
           </v-simple-table>
           
           <v-dialog v-model="AddDialog" max-width="50%" persistent>
                <v-card>
                    <v-card-title class="cyan lighten-1 mb-4">Upload <v-spacer/>
                        <v-icon @click="mCloseAdd">mdi-close</v-icon>
                    </v-card-title>
                    <v-card-text>
                                <v-file-input v-model="file"></v-file-input>
              
                        <v-btn block @click="mAddUpDown" :disabled="file==null ? true : false">
                            <v-progress-circular
                            color="primary"
                            indeterminate
                            v-show="uploading == true ? true : false"
                            ></v-progress-circular>

                             Upload</v-btn>
                    </v-card-text>
                    
                </v-card>
              
           </v-dialog>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            UpDownTableHeader:['Name','Actions'],
            UpDownTableData:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            file:null,
            AddDialog:false,
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
            this.AddDialog = false
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
                    alert('UpDown has been added!')
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
            axios.get(`${this.$url}/api/UpDown/create?filename=${item+'.jpg'}`, {responseType: 'blob'})
            .then(res => {
                
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement("a");
                link.href = url
                link.setAttribute("download", item+'.jpg')
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
         
    }
}
</script>