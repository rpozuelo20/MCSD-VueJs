<template>
  <div class="container w-50 border rounded text-center p-3 bg-light">
    <h2 class="fw-bold mb-3">Modificar personaje</h2>
    <hr />
    <div>
      <form method="POST" v-on:submit.prevent="putPersonajeSerie()">
        <div class="container mb-3">
          <label class="form-label">Serie del personaje</label>
          <select class="form-select" v-model="personaje">
            <option
              v-for="(personaje, index) in personajes"
              :key="index"
              :value="index"
            >
              {{ personaje.nombre }}
            </option>
          </select>
          <img
            v-if="this.personaje"
            :src="this.personajes[this.personaje].imagen"
          />
        </div>
        <div class="container mb-3">
          <label class="form-label">Serie del personaje</label>
          <select class="form-select" v-model="serie">
            <option
              v-for="(serie, index) in series"
              :key="index"
              :value="index"
            >
              {{ serie.nombre }}
            </option>
          </select>
          <img v-if="this.serie" :src="this.series[this.serie].imagen" />
        </div>
        <button class="btn btn-success w-50">Modificar personaje</button>
      </form>
    </div>
  </div>
</template>
<style>
img {
  height: 250px;
  width: 300px;
}
</style>
<script>
import ServiceSeries from "./../../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "ModificarPersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      serie: "",
      personaje: "",
    };
  },
  mounted() {
    this.getSeries();
    this.getPersonajesAll();
  },
  methods: {
    getSeries() {
      service.getSeries().then((res) => {
        this.series = res;
      });
    },
    getPersonajesAll() {
      service.getPersonajesAll().then((res) => {
        this.personajes = res;
      });
    },
    putPersonajeSerie() {
      console.log(this.series[this.serie]);
      service
        .putPersonajeSerie(
          this.personajes[this.personaje].idPersonaje,
          this.series[this.serie].idSerie
        )
        .then((res) => {
          console.log(res);
          this.$router.push(
            "/series/" +
              this.series[this.serie].idSerie +
              "/personajes/" +
              this.series[this.serie].idSerie
          );
        });
    },
  },
};
</script>
