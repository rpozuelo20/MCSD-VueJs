<template>
  <div class="container">
    <form method="POST" v-on:submit.prevent="postApuesta()">
      <div class="container mb-3">
        <label class="form-label">Id: </label>
        <input class="form-control" type="number" v-model="apuesta.idApuesta" />
      </div>
      <div class="container mb-3">
        <label class="form-label">Usuario: </label>
        <input class="form-control" type="text" v-model="apuesta.usuario" />
      </div>
      <div class="container mb-3">
        <label class="form-label">Resultado: </label>
        <input class="form-control" type="text" v-model="apuesta.resultado" />
      </div>
      <div class="container mb-3">
        <label class="form-label">Fecha: </label>
        <input class="form-control" type="text" v-model="apuesta.fecha" />
      </div>
      <div class="container">
        <button class="btn btn-success w-100">Nuevo personaje</button>
      </div>
    </form>
  </div>
</template>
<script>
import ServiceChampions from "./../../services/ServiceChampions";
const service = new ServiceChampions();

export default {
  name: "Apuesta",
  data() {
    return {
      apuesta: {
        idApuesta: 0,
        usuario: "",
        resultado: "",
        fecha: "",
      },
    };
  },
  methods: {
    postApuesta() {
      service.postApuesta(this.apuesta).then((res) => {
        console.log(res);
        this.$router.push("/apuestas");
      });
    },
  },
};
</script>
