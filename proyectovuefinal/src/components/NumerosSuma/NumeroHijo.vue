<template>
  <div>
    <h2>Numero hijo {{ numero }}</h2>
    <button v-on:click="sumarNumeroHijo(numero)">Sumar {{ numero }}</button>
  </div>
</template>
<script>
export default {
  name: "NumeroHijo",
  props: ["numero"],
  data() {
    return {};
  },
  methods: {
    sumarNumeroHijo(num) {
      this.$emit("sumarNumerosParent", num);
    },
  },
};
</script>
