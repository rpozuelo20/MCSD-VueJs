<template>
  <div class="container w-50 border rounded text-center p-3 bg-light">
    <h2 class="fw-bold mb-3">{{ serie.nombre }}</h2>
    <img :src="serie.imagen" class="w-100 rounded shadow" />
    <router-link
      class="mt-3 btn btn-success w-50 border"
      :to="'/series/' + serie.idSerie + '/personajes/' + serie.idSerie"
    >
      Personajes
    </router-link>

    <router-link class="mt-3 btn btn-success w-50 border" :to="'/home'">
      Volver a series
    </router-link>
  </div>
</template>
<script>
import ServiceSeries from "./../../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "Serie",
  data() {
    return {
      serie: {},
    };
  },
  mounted() {
    this.getSerie();
  },
  watch: {
    // nota: es el equivalente a un update, le digo que si el parametro idserie que paso en la url es distinto entonces me ejecutas la funcion getSerie
    "$route.params.idserie"(nextVal, preVal) {
      if (nextVal != preVal) {
        this.getSerie();
      }
    },
  },
  methods: {
    getSerie() {
      var idSerie = parseInt(this.$route.params.idserie);
      service.getSerie(idSerie).then((res) => {
        this.serie = res;
      });
    },
  },
};
</script>
