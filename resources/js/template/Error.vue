<template>
  
  <div>
    <div class="background">
      <div class="font1 text-center" style="font-size: 80px;">{{ status_code }}</div>
      <div class="text-center">
      <v-btn class=" red white--text" small @click="GoBack">Go Back</v-btn>
      </div>
    </div>
    <div style="text-align: center;" class="font2 mb-5">
      OOPS! SOMETHING WENT WRONG
    </div>

    <div style="font-size: 13px;text-align: center;">
      SORRY FOR THE INCONVINIENCE, WE'RE WORKING ON IT<br />
      TRY <strong style="font-size: 15px" class="red--text"
        >REFRESHING</strong > THE PAGE OR 
      <strong style="font-size: 15px" class="red--text"
        >CONTACT US</strong >  IF THE PROBLEM PERSIST<br/>

        <v-icon color="red">mdi-email</v-icon> sample@gmail.com
        <v-icon color="red" class="ml-5">mdi-alert-circle</v-icon> {{ status_name[status_code] }}
    </div>
    
  </div>
 
</template>

<script>
  export default {
    data: () => ({
      status_code: null,
      status_name:{
        '400':'Bad Request',
        '401':'Unauthorized',
        '402':'Payment Required',
        '403':'Forbidden',
        '404':'Not Found', 
        '405':'Method Not Allowed',
        '406':'Not Acceptable',
        '407':'Proxy Authentication Required',
        '408':'Request Timeout',
        '409':'Conflict',
        '410':'Gone', 
        '411':'Length Required',
        '412':'Precondition Failed',
        '413':'Payload Too Large', 
        '414':'URI Too Long',
        '415':'Unsupported Media Type',
        '416':'Range Not Satisfiable', 
        '417':'Expectation Failed',
        '418':'Im a Teapot',
        '419':'Page Expired',
        '421':'Misdirected Requested', 
        '422':'Unprocessable Entity',
        '423':'Locked',
        '424':'Failed Dependency',
        '425':'Too Early',
        '426':'Upgrade Required',
        '428':'Precondition Required',
        '429':'Too Many Requests',
        '431':'Request Header Fields Too Large',
        '451':'Unavailable For Legal Reasons',
        '500':'Internal Server Error',
        '501':'Not Implemented',
        '502':'Bad Gateway',
        '503':'Service Unavailable',
        '504':'Gateway Timeout',
        '505':'HTTP Version Not Supported',
        '506':'Variant Also Negotiates',
        '507':'Insufficient Storage',
        '508':'Loop Detected',
        '510':'Not Extended',
        '511':'Network Authentication Required'
      }
    }),

    created(){  
      this.status_code = this.$route.params.status_code     
    },
    destroyed(){
      this.$store.dispatch('setStatusCode', null)
    },
    methods:{
      GoBack(){
        window.history.go(-1)
        this.$store.dispatch('setStatusCode', null)  
      }
    }
  };
  window.onload = onLoadWindow
    function onLoadWindow () {
        window.history.go(-1)    
    }
</script>

<style scoped>
  /* .Container {
    height: 200px;
    width: 250px;
    background: black;
    border-radius: 13px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  } */
  .font1{
    font-family: RubikMaps;
    font-size: 50px;
    padding-top: 80px;
    color: white;
  }
  .font2{
    font-family: TitanOne;
    font-size: 30px;
    color: white;
    text-shadow:1px 1px 7px black;
  }
  .background{
    background-image: url('http://10.169.142.112/STR/images/error.gif');
    background-position: center center;
    height: 250px;
    background-size: contain;
  }
</style>