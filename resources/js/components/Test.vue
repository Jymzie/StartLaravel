<template>
  <div>
    <div class="pb-2">
        <v-btn @click="mpdf">Generate PDF with DOMPDF</v-btn>
    </div>

    <v-card min-width="500">
        <v-card-title>
            V-card with min-width style
        </v-card-title>
        <v-card-text>
            ArrObj:[{obj:1,misc:[1,2]}, {obj:2,misc:[3,4]}] <br/><br/>
            <span class="highlight">Using findIndex</span><br/>
            Find the index of object obj with value of <span class="value">1</span> <br/>
            this.ArrObj.<span class="highlight">findIndex</span>(arr => arr.obj == <span class="value">1</span>) <br/>
            output is {{ mfindIndex }}
            <br><br>
            <span class="highlight">Using indexOf</span><br/>
            Find the index of object misc with value of <span class="value">4</span> from the array of 1 <br/>
            this.ArrObj[1].misc.<span class="highlight">indexOf</span>(<span class="value">4</span>) <br/>
            output is {{ mfindIndexOf }}
        </v-card-text>
        
    </v-card>

    <v-card class="mt-5">
        <v-card-title>
            Using gridlines cols
        </v-card-title>
        <v-card-text class="text-center">
            <span style="color: red;">Note: You can limit the size of the column using max width</span>
            <v-row>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-card>
                        Size:{{ $vuetify.breakpoint.name }}<br>
                        Width:{{ $vuetify.breakpoint.width }}<br>
                        Height:{{ $vuetify.breakpoint.height }}
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-card style="background: linear-gradient(86deg, rgba(65,184,131,1) 0%, rgba(255,45,32,1) 100%);">
                        background: linear-gradient(86deg, rgba(65,184,131,1) 0%, rgba(255,45,32,1) 100%)
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-card>
                        filter: grayscale(100%)
                        <img src="images\sample.jpg" style="filter: grayscale(100%);" width="100">
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
   
  </div>
</template>

<script>
export default {
    data:() => ({
       ArrObj:[{obj:1,misc:[1,2]},
                {obj:2,misc:[3,4]}]
        
    }),

    methods:{
        mpdf(){
            window.open(`${this.$url}/api/pdf`)
        }
    },

    computed:{
        mfindIndex(){
            return this.ArrObj.findIndex(arr => arr.obj == 1)
        },
        mfindIndexOf(){
            return this.ArrObj[1].misc.indexOf(4)
        }
    }
}
</script>

<style>
    .highlight{
        color: blue;
    }
    .value{
        color: red;
    }
</style>