<template>
  <div>
    <h1>Coches</h1>
    <div class="container">
      <div
        class="row border bg-dark text-center"
        v-for="coche in coches"
        :key="coche"
      >
        <div
          class="
            d-flex
            col
            border
            m-1
            p-2
            bg-light
            align-items-center
            justify-content-center
          "
        >
          {{ coche.marca }}
        </div>
        <div
          class="
            d-flex
            col
            border
            m-1
            p-2
            bg-light
            align-items-center
            justify-content-center
          "
        >
          {{ coche.modelo }}
        </div>
        <div
          class="
            d-flex
            col
            border
            m-1
            p-2
            bg-light
            align-items-center
            justify-content-center
          "
        >
          <img style="width: 200px; height: 150px" :src="coche.imagen" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
var urlapicoches = "https://apicochespaco.azurewebsites.net/";
//nota: aqui podemos declarar variables globales para todos los metodos del componente

export default {
  name: "Coches",
  mounted() {
    this.cargarCoches();
  },
  data() {
    return {
      coches: [],
    };
  },
  methods: {
    cargarCoches() {
      var request = "/webresources/coches";
      var url = urlapicoches + request;
      axios.get(url).then((res) => {
        this.coches = res.data;
      });
    },
  },
};
</script>
