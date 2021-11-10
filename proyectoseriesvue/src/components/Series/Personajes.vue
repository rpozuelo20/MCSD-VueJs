<template>
  <div>
    <h1 class="mb-5 text-center">Personajes</h1>
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
            <img :src="personaje.imagen" style="width: 200px; height: 200px" />
          </td>
        </tr>
      </table>
    </center>
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
