<template>
  <div class="container text-center">
    <h1>{{ equipo.nombre }}</h1>
    <div class="container border rounded shadow">
      <img class="container w-25" :src="equipo.imagen" :alt="equipo.nombre" />
      <hr />
      <p>{{ equipo.descripcion }}</p>
      <hr />
      <h3>Champions: {{ equipo.champions }}</h3>
      <h3>Finalistas: {{ equipo.finalista }}</h3>
      <hr />
      <router-link
        class="btn btn-primary w-100 mb-2"
        :to="'/jugadores/' + equipo.idEquipo"
        >Jugadores</router-link
      >
    </div>
  </div>
</template>
<script>
import ServiceChampions from "./../../services/ServiceChampions";
const service = new ServiceChampions();

export default {
  name: "Equipo",
  data() {
    return {
      equipo: {},
    };
  },
  methods: {
    getEquipo() {
      var idequipo = parseInt(this.$route.params.idequipo);
      service.getEquipo(idequipo).then((res) => {
        this.equipo = res;
      });
    },
  },
  watch: {
    // Watch es un equivalente a Update
    "$route.params.idequipo"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.getEquipo();
      }
    },
  },
  mounted() {
    this.getEquipo();
  },
};
</script>
