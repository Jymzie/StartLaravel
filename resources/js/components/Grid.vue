<template>
   <div>
  
        <div class="pb-2">
            <b class="Maroontext Titlesize">Pure CSS Grid System</b> <v-btn @click="mlink">Reference</v-btn>
        </div>
      

        <v-card color="#e9c9aa">
            <v-card-text>
                <div :class="!$vuetify.breakpoint.xsOnly ? 'search-grid-container':''">
                    <div class="requestgrid pb-2"><b class="Maroontext">REQUEST</b></div>
                    <div class="fromgrid mb-n4">
                        <v-autocomplete placeholder="FROM" background-color="white" dense outlined></v-autocomplete>
                    </div>
                    <div class="togrid mb-n4">
                        <v-autocomplete placeholder="TO" background-color="white" dense outlined></v-autocomplete>
                    </div>
                    <div class="searchgrid pb-1">
                        <v-btn><span class="Maroontext buttonsmcaps">Search</span></v-btn>
                    </div>
                    <div class="monitoringgrid">
                        <v-btn><span class="Maroontext buttonsmcaps">Monitoring</span></v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>

       
   </div>
</template>

<script>
export default {
    methods:{
        mlink(){
            const url = 'https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_styles'
            const link = document.createElement("a");
            link.target = "_blank"
            link.href = url
            link.click();
            link.remove();
        },
       
    }
}
</script>

<style>

.search-grid-container {
  display: grid;
  grid-template-areas:
    'request from to search blank blank monitoring';
  gap: 10px;
  margin-bottom: -10px;
  
}

.requestgrid{
    grid-area: request;
  text-align: center;
  color:"#5a0a0a";
  font-size: 20px;
  padding-top: 7px;
}

.fromgrid{
    grid-area: from;
  text-align: center;
  color:"#5a0a0a"
}

.togrid{
    grid-area: to;
  text-align: center;
  color:"#5a0a0a"
}

.searchgrid{
    grid-area: search;
  text-align: center;
  text-transform: none;
}

.monitoringgrid{
    grid-area: monitoring;
  text-align: center;
  color:"#5a0a0a"
}

.Beigetext{
    color:#e9c9aa;
}

.Maroontext{
    color:#5a0a0a;
}

.Titlesize{
    font-size: 25px;
}

.buttonsmcaps{
    text-transform: none;
}

</style>