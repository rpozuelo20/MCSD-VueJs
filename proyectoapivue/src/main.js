import Vue from "vue";
import App from "./App.vue";
import Coches from "./components/Coches.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EjemploServicios from "./components/EjemploServicios.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import EmpleadosServiciosOficios from "./components/EmpleadosServiciosOficios.vue";

import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/coches", component: Coches },
  { path: "/ejemploservicios", component: EjemploServicios },
  { path: "/empleadosdetalle", component: EmpleadosDetalle },
  { path: "/empleadosoficios", component: EmpleadosOficios },
  { path: "/empleadosserviciosoficios", component: EmpleadosServiciosOficios },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
