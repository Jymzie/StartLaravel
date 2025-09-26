
<template>
    <v-app id="inspire">
         <!-- ANCHOR NAV DRAWER -->
        <v-navigation-drawer
        clipped
         v-model="drawer"
         width="150"
         app
         v-show="!$router.history.current.path.includes('/error') && $route.name != 'login'" 
         mobile-breakpoint="0" touchless
        >
           <v-list dense>
              <v-subheader>LIST COMPONENTS:</v-subheader>
                 <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                 >
                    <v-list-item-icon>
                       <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                       <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                 </v-list-item>
           </v-list>
        </v-navigation-drawer>
        <!-- ANCHOR APP BAR -->
        <!-- :height="$vuetify.breakpoint.height*0.10" -->
        <v-app-bar clipped-left app v-show="!$router.history.current.path.includes('/error') && $route.name != 'login'" >
           <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.xsOnly && !drawer" @click="drawer = !drawer"/>
           <v-icon v-else-if="!$vuetify.breakpoint.xsOnly && drawer" @click="drawer = !drawer" class="mr-8">mdi-close</v-icon>
           <!-- style="font-size: 3.5vh;" -->
           <v-toolbar-title >Web Title</v-toolbar-title>
           <v-spacer/>
           <img  class="rounded-circle mr-2" width="50" height="50" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
           <div>
               {{$vuetify.breakpoint.xsOnly? '':'Jimwell C. Punzalan'}}

               <!-- NOTE Tooltip example -->
               <v-tooltip bottom v-if="!$vuetify.breakpoint.xsOnly">
                  <template v-slot:activator="{ on, attrs }">
                     <v-icon   @click="mRouteto('/login')" v-bind="attrs" v-on="on">mdi-logout</v-icon>
                  </template> 
                  <span>Logout</span>
               </v-tooltip>

               <!-- NOTE dropdown menu example -->
               <v-menu v-else offset-y  open-on-hover :close-on-content-click="false">
                  <template v-slot:activator="{ on, attrs }">
                     <v-icon style="color: grey;" v-bind="attrs" v-on="on">mdi-arrow-down-drop-circle
                     </v-icon>
                  </template>
                  <div style="max-height: 45vw; min-height:20vw;">
                     <v-list>
                        <v-list-item
                           v-for="(item, i) in items"
                           :key="i"
                           :to="item.to"
                        >
                           <v-list-item-icon>
                              <v-icon>{{item.icon}}</v-icon>
                           </v-list-item-icon>
                           <v-list-item-content>
                              <v-list-item-title>{{item.text}}</v-list-item-title>
                           </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                           <v-list-item-icon>
                              <v-icon>mdi-logout</v-icon>
                           </v-list-item-icon>
                           <v-list-item-content>
                              Logout
                           </v-list-item-content>
                        </v-list-item>
                     </v-list>
                  </div>
               </v-menu>
           </div>
        </v-app-bar>
  
        <v-main class="ma-2">
           <router-view @setcookies="mSetCookies"></router-view>
        </v-main>
    </v-app>
  </template>
  
  <script>
     export default {
      created(){
         this.mSetCookies()
      },
      updated(){
         if(this.$router.history.current.path.includes('/error') || this.$router.history.current.path.includes('/login') || this.$vuetify.breakpoint.xsOnly)
            this.drawer = false
      },
      data: () => ({
         drawer: false,
         items:[
            {text:'Home', icon:'mdi-home', to:'home'},
            {text:'CSS Grid', icon:'mdi-grid', to:'Grid'},
            {text:'Draggable', icon:'mdi-drag-variant', to:'Draggable'},
            {text:'Capture', icon:'mdi-camera', to:'Capture'},
            {text:'Play', icon:'mdi-play', to:'Play'},
            {text:'Queue', icon:'mdi-loading', to:'Queue'},
            {text:'Samples', icon:'mdi-note', to:'Test'},
            {text:'Master', icon:'mdi-monitor', to:'master'},
            {text:'Login', icon:'mdi-login', to:'login'}
            
         ]
      }),
      methods:{
         mSetCookies(){
            axios.get(`api/master/setcookies?code=${this.$store.state.credentials.code}&name=${this.$store.state.credentials.name}`)     
         },
         mRouteto(item){
            if(item == '/login'){
               this.$store.commit("logout")
               this.mSetCookies()
            }
            this.$router.push(item)
         },
      }
        
     }
     
  </script>