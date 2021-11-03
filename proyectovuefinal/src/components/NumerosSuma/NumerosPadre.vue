<template>
  <div>
    <h1>Numeros Padre</h1>
    <p>La suma es: {{ suma }}</p>
    <button v-on:click="numeros++">Nuevo Numero {{ numeros }}</button>
    <hr />
    <div v-for="numero in numeros" :key="numero">
      <NumeroHijo
        :numero="numero * aleatorio"
        v-on:sumarNumerosParent="sumarNumerosParent"
      />
    </div>
  </div>
</template>
<script>
import NumeroHijo from "./NumeroHijo.vue";
export default {
  name: "NumerosPadre",
  methods: {
    sumarNumerosParent(num) {
      console.log(num);
      var suma = this.suma;
      this.suma = suma + parseInt(num);
      console.log(suma);
    },
  },
  data() {
    return {
      numeros: 1,
      suma: 0,
      aleatorio: parseInt(Math.random() * 55 + 3),
    };
  },
  components: {
    NumeroHijo,
  },
};
</script>
