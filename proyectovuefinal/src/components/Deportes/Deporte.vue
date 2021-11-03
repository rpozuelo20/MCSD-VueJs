<template>
  <div>
    <h4>{{ deporte }}</h4>
    <button
      v-on:click="
        seleccionarFavorito(deporte /*nota: deporte es el mismo deporte*/)
      "
    >
      Favorito
    </button>
  </div>
</template>
<script>
export default {
  name: "Deporte",
  props: ["deporte"],
  mounted() {
    console.log(this.deporte);
  },
  methods: {
    seleccionarFavorito(depor) {
      this.$emit(
        "seleccionarFavoritoParent",
        depor /*nota: se devuelve depor a la funcion parent*/
      );
    },
  },
  data() {
    return {};
  },
};
</script>
