<template>
  <div>
    <h1 class="mb-5 text-center">Welcome to the Home component.</h1>
    <div
      v-for="(serie, index) in series"
      :key="index"
      class="container w-50 border rounded text-center p-3 bg-light mb-3"
    >
      <h2 class="fw-bold mb-3">{{ serie.nombre }}</h2>
      <img :src="serie.imagen" class="w-100 rounded shadow" />
      <router-link
        class="mt-3 btn btn-success w-50"
        :to="'/series/' + serie.idSerie + '/personajes/' + serie.idSerie"
      >
        Personajes
      </router-link>
    </div>
  </div>
</template>
<script>
import ServiceSeries from "./../../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "Home",
  data() {
    return {
      series: [],
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
  },
};
</script>
