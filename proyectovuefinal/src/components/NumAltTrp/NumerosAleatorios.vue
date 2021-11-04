<template>
  <div>
    <h1>Numeros Aleatorios</h1>
    <ul class="d-flex p-0">
      <li
        class="nav bg-success m-1 text-light fw-bold"
        v-for="num in numAleatorios"
        :key="num"
      >
        <router-link
          class="nav-link active text-light"
          aria-current="page"
          :to="'/numerotriple/' + num"
          >{{ num }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NumerosAleatorios",
  mounted() {
    this.generarAleatorios();
  },
  methods: {
    generarAleatorios() {
      for (var i = 1; i <= 10; i++) {
        var num = parseInt(Math.random() * 55 + 3);
        this.numAleatorios.push(num);
      }
    },
  },
  data() {
    return {
      numAleatorios: [],
    };
  },
};
</script>
