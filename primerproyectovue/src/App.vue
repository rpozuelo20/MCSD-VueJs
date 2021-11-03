<template>
  <div id="app">
    <Menu />
    <h1>Componente App</h1>
    <hr />
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import Menu from "./components/navegacion/Menu.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "App",
  components: { Menu },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  height: 33vw;
}
</style>
