<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>
      Count is : {{ $store.state.count }} and it is {{ evenorodd }}
    </h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'evenorodd'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
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
