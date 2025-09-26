<template>
    <!-- NOTE add minwidth to avoid elements for overlapping -->
    <!-- NOTE add a parent element for overflow-x if horizontal scroll is needed or not showing -->
    <div >
        <!-- ANCHOR SEARCH -->
        <div class="mt-5 mb-n7">
            <v-row>
                <v-col cols="3" lg="1" md="1" sm="2" class="text-right" style="font-size: 25px;">
                    FILTER
                </v-col>
                <v-col cols="5" lg="3" md="3" sm="4">
                    <v-text-field dense outlined v-model="search"></v-text-field>
                </v-col>
                <v-col>
                    <!-- empty -->
                </v-col>
                <v-col cols="3" lg="1" md="1" sm="2" class="text-left">
                    <v-btn @click="adddialog = !adddialog">
                        <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        
        <v-card >
            <v-card-text>
                <!-- ANCHOR LOADING FOR TABLE -->
                <v-row v-if="isContentLoading" class="text-center">
                    <v-col cols="12">
                        <h3>Loading Data</h3>
                    </v-col>
                    <v-col cols="12">
                        <v-progress-circular loadingTable :size="90" :width="20" color="#3c282f" indeterminate></v-progress-circular>
                    </v-col>
                </v-row>

                <!-- ANCHOR TABLE -->
                <v-simple-table v-else class="text-center" fixed-header :height="($vuetify.breakpoint.height)*.7">
                    <thead >
                        <tr >
                            <th class="text-center"  v-for="(header,i) in TableHeader" :key="i">{{ mHeadSpace(header) }}</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data,j) in cMaster" :key="j">
                            <td v-for="(header,i) in TableHeader" :key="i">
                                {{ data[header] }}
                            </td>

                            <td>
                                <v-btn class="my-1" @click="mOpenEdit(data)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            
                                <v-btn class="my-1" @click="mDelete(data)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>  
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>

        <!-- ANCHOR ADD DIALOG -->
        <v-dialog v-model="adddialog" persistent :width="this.$vuetify.breakpoint.smOnly ? '70%':'40%'">
            <v-card>
                <v-card-title>
                    {{ isEdit ? 'EDIT':'ADD' }}
                    <v-spacer/>
                    <v-icon @click="mCloseAdd()">mdi-close</v-icon>
                </v-card-title>
                <v-card-text>
                    <v-row v-for="(header,i) in cDialogitem" :key="i" class="mb-n10">
                        <v-col cols="4" lg="4" md="4" class="text-right">
                            {{ mHeadSpace(header) }}:
                        </v-col>
                        <v-col cols="6" lg="6" md="6" class="text-left">
                            <!-- NOTE has errormessage props to receive errors from catch -->
                            <v-text-field dense outlined v-model="additems[header]" :error-messages="adderr[header] == '' ? '':adderr[header]"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn :disabled="isEdit ? cEditDisable:false" @click="isEdit ? mEdit():mAdd()">{{ isEdit ? 'Edit':'Add' }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
export default {
    // ANCHOR DATA
    data:() => ({
        TableHeader:null,
        TableContent:null,
        isContentLoading:false,
        isEdit:false,
        search:'',
        adddialog: false,
        additems:{},
        compareitems:{},
        adderr:{},
        
    }),

    //NOTE Loads the methods declared from the start
    created(){
        this.mMaster()
        //NOTE yarn run socket-server to run socket io
        //NOTE only loads when triggered by from public/js/server.js - io.emit
        this.$socket.on('reloadme', () => {
            this.mMaster()
            console.log(this.$vuetify.breakpoint.height)
        });
        
    },
    // ANCHOR METHODS w/ CRUD
    methods:{
        // ANCHOR READ
        mMaster(){
            this.isContentLoading = true
            axios.get(`api/master`)
            .then(res => {
                this.TableContent = res.data
                this.TableHeader = Object.keys(res.data[0])

            }).catch(err => {
                this.ErrorCode(err)
            })
            .finally(() => setTimeout(() => {
                this.isContentLoading = false}, "1000"))
        },

        // ANCHOR CREATE
        mAdd(){
            console.log('add',this.additems)
            this.adderr = {UserID:'',UserLevel:'',Password:''}
            axios.post(`api/master`,this.additems)
            .then(res => {
                this.mCloseAdd()
                //NOTE if this method triggers, it will go to server.js
                this.$socket.emit('reload_data','test')
            }).catch(err => {
                //NOTE error catch here
                this.ErrorCode1(err)
            })
        },
        mOpenEdit(item){
            this.isEdit = true
            this.adderr = {UserID:'',UserLevel:'',Password:''}
            this.additems = Object.assign({}, item)
            this.compareitems = Object.assign(this.compareitems, item)
            this.adddialog = true
        },

        // ANCHOR UPDATE
        mEdit(){
            this.additems.oldID = this.compareitems.UserID
            axios.patch(`api/master/updateuser`,this.additems)
            .then(res => {
                this.mCloseAdd()
                this.$socket.emit('reload_data','test')
            }).catch(err => {
                this.ErrorCode1(err)
            })
        },
        mCloseAdd(){
            this.adddialog = false
            this.additems = {}
            this.isEdit = false
        },

        // ANCHOR DELETE
        mDelete(item){
            console.log('del', item)
            axios.delete(`api/master/deleteuser?id=${item.UserID}&date=${item.DeletedDate}`)
            .then(res => {                    
                this.$socket.emit('reload_data','test')
            }).catch(err => {
                this.ErrorCode(err)
            })
        },
        mHeadSpace(str){
            let result = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
            //NOTE Handle consecutive uppercase letters
            // result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
            
            return result.trim();
        },

        //NOTE Sample Error codes
        ErrorCode(err){
            let errorval = 500;
            if(err.response != null){
                errorval = err.response.status
            }
            else
                console.log(err)
            this.$store.dispatch('setStatusCode', errorval)
            this.$router.push('/error/' + errorval)
        },
        ErrorCode1(err){
            if(err.response == null){
                    this.$store.dispatch('setStatusCode', 500)
                    this.$router.push('/error/' + 500)
                    console.log(err)
            }
            if(err.response.status == 400){
                if(err.response.data.UserID != null)
                    this.adderr.UserID = err.response.data.UserID[0]
                if(err.response.data.UserLevel != null)
                    this.adderr.UserLevel = err.response.data.UserLevel[0]
                if(err.response.data.Password != null)
                    this.adderr.Password = err.response.data.Password[0]
                console.log(this.adderr)
            }
            else{
                this.$store.dispatch('setStatusCode', err.response.status)
                this.$router.push('/error/' + err.response.status)
            } 
        }
    },
    // ANCHOR COMPUTED
    computed:{
        //ANCHOR Search Method
        cMaster(){
            if(this.search)
                return this.TableContent.filter(rec => rec.UserID.includes(this.search))
                // return this.TableContent.filter(rec => this.TableHeader.filter(arr => rec[arr].includes(this.search.toLocaleUpperCase())))
            else
                return this.TableContent
        },
        
        //NOTE Using tableheader as the data and excluding unnecessary items for the dialog 
        cDialogitem(){
            if(this.TableHeader)
                return this.TableHeader.filter( rec => !rec.includes('UpdatedDate') && !rec.includes('DeletedDate') && !rec.includes('CreatedDate') && !rec.includes('UpdatedBy'))
        },

        //ANCHOR Edit Disable button
        cEditDisable(){
            if(this.additems.UserID == this.compareitems.UserID && this.additems.UserLevel == this.compareitems.UserLevel && this.additems.Password == this.compareitems.Password)
                return true
            else
                return false
        }
    }
}
</script>
<style scoped>
    /* .tablehead{
        background-color: #5a0a0a !important;
        color: #e9c9aa !important;
    } */
    td, th {
        border: 1px solid #dddddd;
    }
</style>