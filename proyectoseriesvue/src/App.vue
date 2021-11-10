<template>
  <div>
    <Navbar />
    <div class="container pt-5">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/App/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
