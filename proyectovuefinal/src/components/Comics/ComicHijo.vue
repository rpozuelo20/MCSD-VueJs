<template>
  <div class="pb-3 col">
    <div>
      <div class="text-center border">
        <img :src="imagen" class="img-thumbnail" />
        <h2>{{ titulo }} [{{ array }}]</h2>
        <p>{{ descripcion }}</p>
        <button v-on:click="comicFavoritoHijo(titulo)" class="w-100">
          Seleccionar favorito
        </button>
        <button class="w-100" v-on:click="modificarComicHijo(array)">
          Modificar comic
        </button>
        <button class="w-100" v-on:click="eliminarComicHijo(array)">
          Eliminar comic
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicHijo",
  props: ["titulo", "imagen", "descripcion", "array"],
  methods: {
    comicFavoritoHijo(data) {
      this.$emit("comicFavoritoPadre", data);
    },
    eliminarComicHijo(data) {
      this.$emit("eliminarComicPadre", data);
    },
    modificarComicHijo(data) {
      this.$emit("modificarComicPadre", data);
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 250px;
}
</style>
