import Vue from "vue";
import App from "./App.vue";
import Coches from "./components/Coches.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/coches", component: Coches },
  { path: "/empleadosdetalle", component: EmpleadosDetalle },
  { path: "/empleadosoficios", component: EmpleadosOficios },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
