<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #393D49;
}
html,body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

ul, ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
