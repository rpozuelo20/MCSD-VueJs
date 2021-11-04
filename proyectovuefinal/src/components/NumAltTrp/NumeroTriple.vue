<template>
  <div>
    <h1>Numero Triple {{ numero }}</h1>
    <p>El triple del numero es {{ triple }}</p>
    <button @click="volverAleatorios()">Volver a numeros aleatorios</button>
  </div>
</template>
<script>
export default {
  name: "NumeroTriple",
  mounted() {
    if (this.$route.params.num == null) {
      this.mensaje = "NO HAY NUMERO";
    } else {
      this.mostrarTriple();
    }
  },
  watch: {
    "$route.params.num"(nextVal, preVal) {
      if (nextVal != preVal) {
        this.mostrarTriple();
      }
    },
  },
  methods: {
    mostrarTriple() {
      this.numero = this.$route.params.num;
      this.triple = parseInt(this.numero) * 3;
    },
    volverAleatorios() {
      this.$router.push("/numerosaleatorios");
    },
  },
  data() {
    return {
      numero: 0,
      triple: 0,
    };
  },
};
</script>
