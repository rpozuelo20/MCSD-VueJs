<template>
  <div>
    <h1>Deportes</h1>
    <h4>
      El deporte favorito es:
      <small v-if="favorito" class="text-danger fw-bold">{{ favorito }}</small>
      <small v-else class="text-success fw-bold">ningun favorito</small>
    </h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="deporte in deportes" :key="deporte">
        <Deporte
          :deporte="deporte"
          v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import Deporte from "./Deporte.vue";
export default {
  name: "Deportes",
  components: {
    Deporte,
  },
  data() {
    return {
      deportes: ["Canicas", "Futbol", "Baloncesto", "Surf", "Esgrima"],
      favorito: "",
    };
  },
  methods: {
    seleccionarFavoritoParent(deporte) {
      console.log(deporte);
      this.favorito = deporte;
    },
  },
};
</script>
