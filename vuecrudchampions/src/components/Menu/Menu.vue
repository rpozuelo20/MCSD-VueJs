<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Champions</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/apuestas">Apuestas</router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Equipos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="(equipo, index) in equipos" :key="index">
                <router-link
                  class="dropdown-item"
                  :to="'/equipo/' + equipo.idEquipo"
                >
                  {{ equipo.nombre }}
                </router-link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import ServiceChampions from "./../../services/ServiceChampions";
const service = new ServiceChampions();

export default {
  name: "Menu",
  data() {
    return {
      equipos: [],
    };
  },
  methods: {
    getEquipos() {
      service.getEquipos().then((res) => {
        this.equipos = res;
      });
    },
  },
  mounted() {
    this.getEquipos();
  },
};
</script>
