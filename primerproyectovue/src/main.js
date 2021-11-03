import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // nota: importamos Router
// nota: importamos los componentes para usarlos con el Router
import Home from "./components/navegacion/home.vue";
import Television from "./components/navegacion/television.vue";
import Music from "./components/navegacion/music.vue";
import Cinema from "./components/navegacion/cinema.vue";
import CicloVida from "./components/CicloVida.vue";
import JuegosConmutados from "./components/JuegosConmutados.vue";
import Directivas from "./components/Directivas.vue";

Vue.config.productionTip = false;

// nota: debemos dar de alta la tecnologia dentro del servidor
Vue.use(VueRouter);
// nota: necesitamos tener un array con todas las rutas del servidor
const routes = [
  { path: "/ciclovida", component: CicloVida },
  { path: "/home", component: Home },
  { path: "/television", component: Television },
  { path: "/music", component: Music },
  { path: "/cinema", component: Cinema },
  { path: "/directivas", component: Directivas },
  { path: "/juegosconmutados", component: JuegosConmutados },
  { path: "/", component: Home },
];
//nota: teniendo las rutas debemos crear un objeto router de la clase VueRouter que contiene las rutas y el modo de navegacion
const router = new VueRouter({
  routes,
  mode: "history",
});
// nota: debemos de dar de alta el objeto router al crear la app

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
