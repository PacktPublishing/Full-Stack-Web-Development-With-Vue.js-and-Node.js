<template>
    <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="indigo">
          <v-toolbar-title>Registration</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
            <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="indigo" dark @click="register">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthService from '@/services/AuthService'
export default {
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      async register(){
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
}
</script>
<style scoped>

</style>
