<template>
  <div>
    <h1>Detalles Departamento</h1>
    <router-link class="btn" to="/departamentos">Volver al listado</router-link>
    <h2>{{ departamento.nombre + ", " + departamento.localidad }}</h2>
  </div>
</template>
<script>
export default {
  name: "DetallesDepartamento",
  mounted() {
    this.departamento.numero = this.$route.params.iddepartamento;
    this.departamento.nombre = this.$route.params.nombre;
    this.departamento.localidad = this.$route.params.localidad;

    console.log(this.departamento);
  },
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
};
</script>
