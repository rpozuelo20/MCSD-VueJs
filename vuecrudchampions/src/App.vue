<template>
  <div>
    <Menu />
    <div class="container pt-5">
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from "./components/Menu/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>
