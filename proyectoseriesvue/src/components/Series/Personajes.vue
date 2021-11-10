<template>
  <div>
    <h1 class="mb-5 text-center">Personajes</h1>
    <div v-if="personajes.length > 0">
      <center>
        <router-link class="mb-3 btn btn-success w-50" :to="'/home'">
          Volver a series
        </router-link>
      </center>
      <center>
        <table class="shadow rounded overflow-hidden table text-center w-75">
          <tr class="bg-dark text-light">
            <th>Personaje</th>
            <th>Imagen</th>
          </tr>
          <tr
            class="border bg-light"
            v-for="(personaje, index) in personajes"
            :key="index"
          >
            <td class="border">{{ personaje.nombre }}</td>
            <td class="border">
              <img :src="personaje.imagen" style="height: 200px" />
            </td>
          </tr>
        </table>
      </center>
    </div>
    <div v-else>
      <div class="container w-50 text-center">
        <h2>Los personajes estan cargando...</h2>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceSeries from "./../../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "Personajes",
  data() {
    return {
      personajes: [],
    };
  },
  mounted() {
    this.getPersonajes();
  },
  methods: {
    getPersonajes() {
      var idSerie = parseInt(this.$route.params.idserie);
      service.getPersonajes(idSerie).then((res) => {
        this.personajes = res;
      });
    },
  },
};
</script>
