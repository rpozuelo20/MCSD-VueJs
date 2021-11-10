<template>
  <div>
    <h1>Eliminar Departamento</h1>
  </div>
</template>
<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
  name: "EliminarDepartamento",
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.iddepartamento;
    this.deleteDepartamento();
  },
  methods: {
    deleteDepartamento() {
      service.deleteDepartamento(this.id).then((res) => {
        console.log(res);
        this.$router.push("/departamentos");
      });
    },
  },
};
</script>
