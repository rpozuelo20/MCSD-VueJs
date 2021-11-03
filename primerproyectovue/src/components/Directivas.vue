<template>
  <div>
    <h1>Directivas Vue</h1>
    <ul v-if="peliculas.length > 0">
      <li v-for="pelicula in peliculas" :key="pelicula">
        {{ pelicula }}
      </li>
    </ul>
    <label>Numero: </label>
    <input type="number" v-model="numero" /><br />
    <label>Nombre: </label>
    <input type="text" v-model="nombre" /><br />
    <label>Edad: </label>
    <input type="number" v-model="edad" /><br />
    <!-- nota: con v-model enlazamos el objeto a la variable -->
    <h4>{{ nombre }},{{ edad }}</h4>
    <h4>{{ $data }}</h4>
    <h3 v-if="numero % 2 == 0 && numero > 0" style="color: red">
      {{ numero }} es par
    </h3>
    <h3 v-else-if="numero % 2 != 0" style="color: blue">
      {{ numero }} es impar
    </h3>
  </div>
</template>

<script>
export default {
  name: "Directivas",
  data() {
    return {
      nombre: "",
      edad: 0,
      numero: 0,
      peliculas: ["Up", "Coco", "Wall-E", "Inside Out"],
    };
  },
};
</script>
