<template>
  <div class="container w-50 border rounded text-center p-3 bg-light">
    <h2 class="fw-bold mb-3">Nuevo personaje</h2>
    <hr />
    <div>
      <form method="POST" v-on:submit.prevent="postPersonaje()">
        <div class="container mb-3">
          <label class="form-label">Nombre del personaje</label>
          <input class="form-control" type="text" v-model="personaje.nombre" />
        </div>
        <div class="container mb-3">
          <label class="form-label">Imagen del personaje</label>
          <input class="form-control" type="text" v-model="personaje.imagen" />
        </div>
        <div class="container mb-3">
          <label class="form-label">Serie del personaje</label>
          <select class="form-select" v-model="personaje.idSerie">
            <option
              v-for="(serie, index) in series"
              :key="index"
              :value="serie.idSerie"
            >
              {{ serie.nombre }}
            </option>
          </select>
        </div>
        <button class="btn btn-success w-50">Nuevo personaje</button>
      </form>
    </div>
  </div>
</template>
<script>
import ServiceSeries from "./../../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "NuevoPersonaje",
  data() {
    return {
      series: [],
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
    };
  },
  mounted() {
    this.getSeries();
  },
  methods: {
    getSeries() {
      service.getSeries().then((res) => {
        this.series = res;
      });
    },
    postPersonaje() {
      this.personaje.idPersonaje = parseInt(Math.random() * 55 + 15);
      this.personaje.idSerie = parseInt(this.personaje.idSerie);

      service.postPersonaje(this.personaje).then((res) => {
        console.log(res, this.personaje, "OK");
        this.$router.push(
          "/series/" +
            this.personaje.idSerie +
            "/personajes/" +
            this.personaje.idSerie
        );
      });
    },
  },
};
</script>
