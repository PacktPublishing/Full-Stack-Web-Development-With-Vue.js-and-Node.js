<template>
  <div id="app">
    <v-app>
      <app-header />
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components:{
    'app-header':Header
  }
}
</script>

<style>
.v-content{
  margin-top: 100px;
}
</style>
