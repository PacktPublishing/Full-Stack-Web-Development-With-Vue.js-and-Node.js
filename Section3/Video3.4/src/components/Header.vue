<template>
  <v-toolbar fixed class="indigo" dark>
    <v-toolbar-title class="mr-4" dark @click="navaigateTo('home')">Playlist App</v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark router to="/songs"> My Songs </v-btn>
    </v-toolbar-items>
    
    <v-spacer></v-spacer>
    
    <v-toolbar-items>
      <v-btn flat dark router to="/login">Login</v-btn>
      <v-btn flat dark router to="/signup">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>  
</template>

<script>
export default {
    methods:{
      navaigateTo (route){
        this.$router.push(route)
      }
    }
}
</script>
<style scoped>
.mr-4 {
  cursor: pointer;
}
.mr-4:hover {
  color: black;
}
</style>
