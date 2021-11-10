<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Series</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/nuevopersonaje"
                >Nuevo personaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/modificarpersonaje"
                >Modificar personaje</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li v-for="(serie, index) in series" :key="index">
                  <router-link
                    class="dropdown-item"
                    :to="'/series/' + serie.idSerie"
                  >
                    {{ serie.nombre }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Global from "./../Global";
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      series: [],
    };
  },
  mounted() {
    this.getSeries();
  },
  methods: {
    getSeries() {
      var request = "/api/Series";
      var url = Global.urlapiseries + request;
      axios.get(url).then((res) => {
        this.series = res.data;
      });
    },
  },
};
</script>
