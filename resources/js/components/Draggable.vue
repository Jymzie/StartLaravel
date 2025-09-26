<template>
    <!-- NOTE add minwidth to avoid elements for overlapping -->
    <!-- NOTE add a parent element for overflow-x if horizontal scroll is needed or not showing -->
    <div >
     
        <v-card >
            <v-card-text>
                <v-row>
                    <v-col cols="8">
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
                            
                                </tr>
                            </thead>
                            <tbody>
                                <!-- ANCHOR draggable data example  -->
                                <draggable v-model="TableContent"  @end="mGetData">
                                    <tr v-for="(data,j) in TableContent" :key="j">
                                        <td v-for="(header,i) in TableHeader" :key="i">
                                            {{ data[header] }}
                                        </td>

                                    </tr>
                                </draggable>
                            </tbody>
                        </v-simple-table>

                        <v-btn @click="mlink">Reference</v-btn>
                    </v-col>
                    <v-col cols="4">
                        <div>
                            <pre style="font-size: 11;">{{TableContentString}}</pre>
                        </div>
                    </v-col>
                </v-row>
               
            </v-card-text>
        </v-card>

      
      
    </div>
</template>

<script>
    //NOTE Vuedraggable extension
  import draggable from 'vuedraggable'
export default {
    components: {
        draggable,
    },

    // ANCHOR DATA
    data:() => ({
        TableHeader:null,
        TableContent:null,
        isContentLoading:false,
      
    }),

    created(){
        this.mMaster()
        
    },
 
    methods:{
        // ANCHOR READ
        mMaster(){
            this.isContentLoading = true
            axios.get(`api/master`)
            .then(res => {
                this.TableContent = res.data
                this.TableHeader = Object.keys(res.data[0])

            }).catch(err => {
                let errorval = 500;
                if(err.response != null){
                    errorval = err.response.status
                }
                else
                    console.log(err)
                this.$store.dispatch('setStatusCode', errorval)
                this.$router.push('/error/' + errorval)
            })
            .finally(() => setTimeout(() => {
                this.isContentLoading = false}, "1000"))
        },

        // ANCHOR Get Dragged data
        mGetData(val){
            console.log(val.oldIndex +' ---> '+ val.newIndex)
        },
        mlink(){
            const url = 'https://github.com/David-Desmaisons/draggable-example/blob/master/src/components/Hello.vue'
            const link = document.createElement("a");
            link.target = "_blank"
            link.href = url
            link.click();
            link.remove();
        },

        mHeadSpace(str){
            let result = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
            //NOTE Handle consecutive uppercase letters
            // result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
            
            return result.trim();
        },

   
    },
    computed:{
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: !this.editable,
                ghostClass: "ghost"
            };
        },
        TableContentString() {
            return JSON.stringify(this.TableContent, null, 2);
        },
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
    tbody > div:first-child {
    display: contents !important;
}


</style>