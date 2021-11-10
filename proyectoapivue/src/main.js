import Vue from "vue";
import App from "./App.vue";
import Coches from "./components/Coches.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EjemploServicios from "./components/EjemploServicios.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import EmpleadosServiciosOficios from "./components/EmpleadosServiciosOficios.vue";
import Departamentos from "./components/Departamentos/Departamentos.vue";
import DetallesDepartamento from "./components/Departamentos/DetallesDepartamento.vue";
import EliminarDepartamento from "./components/Departamentos/EliminarDepartamento.vue";
import ModificarDepartamento from "./components/Departamentos/ModificarDepartamento.vue";
import InsertarDepartamento from "./components/Departamentos/InsertarDepartamento.vue";

import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/coches", component: Coches },
  { path: "/ejemploservicios", component: EjemploServicios },
  { path: "/empleadosdetalle", component: EmpleadosDetalle },
  { path: "/departamentos", component: Departamentos },
  {
    path: "/eliminardepartamento/:iddepartamento",
    component: EliminarDepartamento,
  },
  { path: "/empleadosoficios", component: EmpleadosOficios },
  { path: "/insertardepartamento", component: InsertarDepartamento },
  {
    path: "/modificardepartamento/:iddepartamento",
    component: ModificarDepartamento,
  },
  {
    path: "/detallesdepartamento/:iddepartamento/:nombre/:localidad",
    component: DetallesDepartamento,
  }, // ruta con parametros
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
