import Vue from "vue";
import App from "./App.vue";
import Personajes from "./components/Series/Personajes.vue";
import Serie from "./components/Series/Serie.vue";
import Home from "./components/App/Home.vue";
// nota: importar la dependencia de router
import VueRouter from "vue-router";

Vue.config.productionTip = false;

// nota: importar uso y const de la dependencia de router
Vue.use(VueRouter);
const routes = [
  { path: "/series/:idserie/personajes/:idserie", component: Personajes },
  { path: "/series/:idserie", component: Serie },
  { path: "/home", component: Home },
  { path: "/", component: Home },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  // nota: necesario llamar a router en new Vue
  router,
  render: (h) => h(App),
}).$mount("#app");
