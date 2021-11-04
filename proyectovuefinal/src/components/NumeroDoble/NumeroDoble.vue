<template>
  <div class="container">
    <h1 class="display-4">Numero Doble</h1>
    <div class="pt-2 pb-2" v-if="mensaje">
      <p>{{ mensaje }}.</p>
    </div>
    <div class="pt-2 pb-2" v-else>
      <p>El numero recibido es {{ numero }}.</p>
      <p>El doble del numero recibido es {{ doble }}.</p>
    </div>
    <button @click="redirectToHome()">Redireccionar home</button>
  </div>
</template>
<script>
export default {
  name: "NumeroDoble",
  mounted() {
    if (this.$route.params.numero == null) {
      this.mensaje = "NO HAY NUMERO";
    } else {
      this.mostarDoble();
    }
  },
  watch: {
    "$route.params.numero"(nextVal, preVal) {
      if (nextVal != preVal) {
        this.mostarDoble();
      }
    },
  },
  methods: {
    redirectToHome() {
      this.$router.push("/home");
    },
    mostarDoble() {
      this.numero = this.$route.params.numero;
      this.doble = parseInt(this.numero) * 2;
    },
  },
  data() {
    return {
      mensaje: "",
      numero: 0,
      doble: 0,
    };
  },
};
</script>
