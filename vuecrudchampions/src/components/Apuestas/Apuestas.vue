<template>
  <div class="container">
    <h1>Apuestas</h1>
    <div class="container">
      <router-link class="btn btn-success w-100" to="/insertarapuesta"
        >Insertar apuesta</router-link
      >
      <table class="table table-bordered">
        <thead class="bg-dark text-light">
          <tr>
            <th>Usuario</th>
            <th>Resultado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(apuesta, index) in apuestas" :key="index">
            <td>{{ apuesta.usuario }}</td>
            <td>
              {{ apuesta.resultado }}
            </td>
            <button
              class="btn btn-danger bg-danger w-100"
              @click="deleteApuesta(apuesta.idApuesta)"
            >
              Eliminar
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ServiceChampions from "./../../services/ServiceChampions";
const service = new ServiceChampions();

export default {
  name: "Apuestas",
  data() {
    return {
      apuestas: [],
    };
  },
  methods: {
    getApuestas() {
      service.getApuestas().then((res) => {
        this.apuestas = res;
      });
    },
    deleteApuesta(idapuesta) {
      service.deleteApuesta(idapuesta).then((res) => {
        console.log(res);
        this.getApuestas();
      });
    },
  },
  mounted() {
    this.getApuestas();
  },
};
</script>
