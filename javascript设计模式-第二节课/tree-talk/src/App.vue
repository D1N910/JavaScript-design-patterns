<template>
  <div id="app">
    <TalkHome user="Alex"/>
    <TalkHome user="Cake"/>
    <TalkHome user="Five"/>
  </div>
</template>

<script>
import TalkHome from './components/talkHome'

export default {
  name: 'App',
  components: {
    TalkHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
</style>
