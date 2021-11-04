<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">VueProyect</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/multiplicar"
              >Multiplicar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/deportes">Deportes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/numerospadre"
              >NumerosSuma</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/comicspadre"
              >ComicsPadre</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/numerodoble/"
              >SinNumeroDoble</router-link
            >
          </li>
          <li v-for="num in valores" :key="num" class="nav-item">
            <router-link class="nav-link" :to="'/numerodoble/' + num"
              >SinNumeroDoble {{ num }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/numerosaleatorios"
              >NumerosAleatorios</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      valores: [66, 99, 12],
    };
  },
};
</script>
