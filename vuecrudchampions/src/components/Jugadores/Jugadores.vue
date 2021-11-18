<template>
  <div class="container text-center">
    <div class="container border rounded shadow">
      <router-link
        class="btn btn-primary w-100 mt-2 mb-2"
        :to="'/equipo/' + $route.params.idequipo"
        >Equipo</router-link
      >
      <table class="table table-bordered">
        <thead class="bg-dark text-light">
          <tr>
            <th>Jugador</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(jugador, index) in jugadores" :key="index">
            <td>{{ jugador.nombre }}</td>
            <td>
              <img
                :src="jugador.imagen"
                :alt="jugador.nombre"
                class="container w-25"
              />
            </td>
            <td>
              <router-link
                class="btn btn-danger"
                :to="'/jugador/' + jugador.idJugador"
                >Detalles</router-link
              >
            </td>
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
  name: "Jugadores",
  data() {
    return {
      jugadores: [],
    };
  },
  methods: {
    getJugadores() {
      var idequipo = parseInt(this.$route.params.idequipo);
      service.getJugadores(idequipo).then((res) => {
        this.jugadores = res;
      });
    },
  },
  watch: {
    // Watch es un equivalente a Update
    "$route.params.idequipo"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.getJugadores();
      }
    },
  },
  mounted() {
    this.getJugadores();
  },
};
</script>
