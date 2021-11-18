<template>
  <div class="container">
    <div class="container text-center w-75" v-if="jugador.idJugador">
      <img :src="jugador.imagen" :alt="jugador.nombre" class="container w-25" />
      <h1>{{ jugador.nombre }}</h1>
      <p>Fecha de nacimiento: {{ jugador.fechaNacimiento }}</p>
      <h3>{{ jugador.posicion }}</h3>
      <center><hr class="w-75" /></center>
      <router-link
        class="btn btn-danger w-75"
        :to="'/jugadores/' + jugador.idEquipo"
        >Jugadores</router-link
      >
    </div>
    <div
      class="d-flex justify-content-center align-items-center"
      style="min-height: 50vh"
      v-else
    >
      <div
        class="spinner-border"
        role="status"
        style="width: 5rem; height: 5rem"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceChampions from "./../../services/ServiceChampions";
const service = new ServiceChampions();

export default {
  name: "Jugador",
  data() {
    return {
      jugador: {},
    };
  },
  methods: {
    getJugador() {
      var idjugador = parseInt(this.$route.params.idjugador);
      service.getJugador(idjugador).then((res) => {
        this.jugador = res;
      });
    },
  },
  watch: {
    // Watch es un equivalente a Update
    "$route.params.idjugador"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.getJugador();
      }
    },
  },
  mounted() {
    this.getJugador();
  },
};
</script>
