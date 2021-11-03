<template>
  <div class="container pb-3">
    <div class="container">
      <div class="container w-50 text-center border">
        <img :src="imagen" class="img-thumbnail" />
        <h2>{{ titulo }}</h2>
        <p>{{ descripcion }}</p>
        <button v-on:click="comicFavoritoHijo(titulo)" class="w-100">
          Seleccionar favorito
        </button>
        <button class="w-100">Modificar comic</button>
        <button class="w-100">Eliminar comic</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicHijo",
  props: ["titulo", "imagen", "descripcion"],
  methods: {
    comicFavoritoHijo(data) {
      this.$emit("comicFavoritoPadre", data);
    },
  },
};
</script>

<style scoped>
img {
  width: 300px;
  height: 400px;
}
</style>
