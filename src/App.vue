<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Resume</router-link> |
      <router-link to="/cover-letter" v-if="!prod">Cover Letter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  data: function() {
    return {
      prod: (process.env.NODE_ENV === 'production')
    }
  }
}
</script>