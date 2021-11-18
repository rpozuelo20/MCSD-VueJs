import Vue from "vue";
import App from "./App.vue";
import Apuesta from "./components/Apuestas/Apuesta.vue";
import Apuestas from "./components/Apuestas/Apuestas.vue";
import Jugador from "./components/Jugadores/Jugador.vue";
import Jugadores from "./components/Jugadores/Jugadores.vue";
import Equipo from "./components/Equipo/Equipo.vue";
import Home from "./components/Home/Home.vue";

// Router y rutas
import VueRouter from "vue-router";

Vue.config.productionTip = false;

// Router y rutas
Vue.use(VueRouter);
const routes = [
  { path: "/insertarapuesta", component: Apuesta },
  { path: "/apuestas", component: Apuestas },
  { path: "/jugador/:idjugador", component: Jugador },
  { path: "/jugadores/:idequipo", component: Jugadores },
  { path: "/equipo/:idequipo", component: Equipo },
  { path: "/home", component: Home },
  // La ultima ruta sera "/"
  { path: "/", component: Home },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router, // Router y rutas
  render: (h) => h(App),
}).$mount("#app");
