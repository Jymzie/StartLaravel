<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
        <!-- NOTE Customize Login here -->
        <v-card width="300px" style="background: linear-gradient(#f3f3f3,#b9b9b9);">
            <v-card-text class="mt-2">
                <div class=" text-center">
                    <v-col cols="12" class="mt-n7">
                        <span class="text-h6 font-weight-bold black--text">LOGIN</span>
                    </v-col>

                    <!--ANCHOR USER -->
                    <v-col cols="12" class="mt-n4">
                        <v-text-field v-model="login.UserID"  oninput="this.value = this.value.replace(/[^0-9]/g, '')" outlined dense background-color="white" :error-messages="loginerror.UserID != '' ? loginerror.UserID : ''" maxlength="7">
                            <template v-slot:prepend-inner>
                                <v-icon class="black--text">mdi-account</v-icon>
                            </template>
                            <v-tooltip right slot="append" disabled>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon class="black--text" v-on="on" v-bind="attrs" @click="login.UserID =''">{{ login.UserID == '' ? '' : 'mdi-close' }}</v-icon>
                                </template>
                            </v-tooltip>
                        </v-text-field>
                    </v-col>

                    <!--ANCHOR PASSWORD -->
                    <v-col cols="12" class="mt-n8">
                        <v-text-field v-model="login.Password" oninput="this.value = this.value.replace(/[ ]/g, '')"  outlined dense background-color="white" :error-messages="loginerror.Password != '' ? loginerror.Password : ''" :type="isShowPassword ? 'text' : 'password'">
                            <template v-slot:prepend-inner>
                                <v-icon class="black--text">mdi-key</v-icon>
                            </template>
                            <v-tooltip right slot="append" disabled>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon class="black--text" v-on="on" v-bind="attrs" @click="isShowPassword = !isShowPassword">{{ !isShowPassword ? "mdi-eye-off" : "mdi-eye" }}</v-icon>
                                </template>
                            </v-tooltip>
                        </v-text-field>
                    </v-col>

                    <!--ANCHOR LOGIN -->
                    <v-col cols="12" class="mt-n8 text-right">
                        <v-btn class="text-right white--text" color="#3c282f" @click="mLogin('user')">Login</v-btn>
                    </v-col>

                    <v-col cols="12">
                        <small>Are you having a problem logging in? <br>Call <u>blank</u> for assistance</small>
                    </v-col>

                    <!--ANCHOR GUEST -->
                    <v-col cols="12" class="text-right">
                        <small class=" red--text"> No Account? Login as</small>
                        <v-btn class="white--text" color="#3c282f" @click="mLogin('guest')">Guest</v-btn>
                    </v-col>
                
                </div>
            </v-card-text>
        </v-card>
        
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data:() => ({
        isShowPassword: false,
        login:{UserID:'',Password:''},
        loginerror:{UserID:'',Password:''},
        
    }),
    methods:{
        mLogin(id){
            if(id=='user'){
                if(this.login.UserID == '' && this.login.Password == '')
                    this.loginerror = {UserID: 'The Employee ID field is required', Password: 'The Password field is required'}
                else if(this.login.UserID.length < 5)
                    this.loginerror = {UserID: 'Minimum of 5 characters', Password: ''}
                else if(this.login.Password == '')
                    this.loginerror = {UserID: '', Password: 'The Password field is required'}
                else if(this.login.UserID == '')
                    this.loginerror = {UserID: 'The Employee ID field is required', Password: ''}
                else{
                    this.$store.commit("login", {code:this.login.UserID,name:'Jimwell'})
                    this.$emit('setcookies')
                    this.$router.push('/home')
                }
            }
            else{
                this.$store.commit("login", {code:'0000',name:'Guest'})
                this.$emit('setcookies')
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style>

</style>