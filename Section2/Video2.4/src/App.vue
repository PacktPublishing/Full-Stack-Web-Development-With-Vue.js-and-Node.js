<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <comp1 />
    <comp2 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Comp1 from './components/comp1.vue'
import Comp2 from './components/comp2.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Comp1,
    Comp2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
