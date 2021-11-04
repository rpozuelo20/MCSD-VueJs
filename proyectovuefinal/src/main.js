import Vue from "vue";
import App from "./App.vue";

// nota: necesitamos VueRouter para realizar el Router.
import VueRouter from "vue-router";
import Home from "./components/App/Home.vue";
import NumerosPadre from "./components/NumerosSuma/NumerosPadre.vue";
import Multiplicar from "./components/App/Multiplicar.vue";
import Deportes from "./components/Deportes/Deportes.vue";
import ComicsPadre from "./components/Comics/ComicsPadre.vue";
import NumerosAleatorios from "./components/NumAltTrp/NumerosAleatorios.vue";
import NumeroTriple from "./components/NumAltTrp/NumeroTriple.vue";
import NumeroDoble from "./components/NumeroDoble/NumeroDoble.vue";

Vue.config.productionTip = false;

// nota: llamamos al VueRouter y creamos routes (contiene las rutas) y router (actua de enrutador).
Vue.use(VueRouter);
const routes = [
  { path: "/numerodoble/:numero?", component: NumeroDoble },
  { path: "/comicspadre", component: ComicsPadre },
  { path: "/numerospadre", component: NumerosPadre },
  { path: "/multiplicar", component: Multiplicar },
  { path: "/deportes", component: Deportes },
  { path: "/numerotriple/:num?", component: NumeroTriple },
  { path: "/numerosaleatorios", component: NumerosAleatorios },
  { path: "/home", component: Home },
  { path: "/", component: Home },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

// nota: llamamos a router en new Vue.
new Vue({
  router, // nota: aqui importamos router
  render: (h) => h(App),
}).$mount("#app");
