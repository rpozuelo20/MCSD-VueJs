<template>
  <div class="container w-50 border rounded text-center p-3 bg-light">
    <h2 class="fw-bold mb-3">Modificar personaje</h2>
    <hr />
    <div>
      <form method="POST">
        <div class="container mb-3">
          <label class="form-label">Serie del personaje</label>
          <select class="form-select">
            <option
              v-for="(personaje, index) in personajes"
              :key="index"
              :value="personaje.idPersonaje"
            >
              {{ personaje.nombre }}
            </option>
          </select>
        </div>
        <div class="container mb-3">
          <label class="form-label">Serie del personaje</label>
          <select class="form-select">
            <option
              v-for="(serie, index) in series"
              :key="index"
              :value="serie.idSerie"
            >
              {{ serie.nombre }}
            </option>
          </select>
        </div>
        <button class="btn btn-success w-50">Modificar personaje</button>
      </form>
    </div>
  </div>
</template>
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
  },
};
</script>
