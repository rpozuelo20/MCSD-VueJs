<template>
  <div id="app">
    <AppNav />
    <div class="container pt-3">
      <router-view />
      <!-- nota: router-view nos permite pintar el router? -->
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AppNav from "./components/App/AppNav.vue";

export default {
  name: "App",
  components: {
    AppNav,
  },
};
</script>
