<template>
  <div>
    <h1>Propiedades Conmutadas</h1>

    <ul>
      <li v-for="juego in juegos" :key="juego">
        {{ juego | mayusculas }} |
        {{ juego | mayusculasParametro("Juegazo!!!") }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JuegosConmutados",
  filters: {
    mayusculas(dato) {
      return dato.toUpperCase();
    },
    mayusculasParametro(dato, descripcion) {
      return dato.toUpperCase() + ": " + descripcion;
    },
  },
  computed: {
    // nota: una propiedad conmutada siempre devuelve valores y no tiene parametros
    // nota: recordar que juegosRojos es como una propiedad
    juegosRojos() {
      var datos = this.juegos;
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      juegos: ["Call Of Duty", "Fortnite", "Rust", "CS:GO", "Valorant"],
    };
  },
};
</script>

<style scoped>
ul li {
  text-align: left;
  display: block !important;
  font-weight: bold;
  margin: 0px 2em;
}
</style>
