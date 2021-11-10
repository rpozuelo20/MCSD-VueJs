<template>
  <div>
    <h1>Modificar Departamento</h1>
    <form
      v-if="departamento"
      method="POST"
      v-on:submit.prevent="updateDepartamento()"
    >
      <label>Nombre</label>
      <input v-model="departamento.nombre" type="text" />
      <label>Localidad</label>
      <input v-model="departamento.localidad" type="text" />
      <button>Modificar</button>
    </form>
  </div>
</template>
<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
  name: "ModificarDepartamento",
  data() {
    return {
      departamento: null,
      id: 0,
    };
  },
  mounted() {
    this.id = parseInt(this.$route.params.iddepartamento);
    this.buscarDepartamento();
  },
  methods: {
    buscarDepartamento() {
      service.buscarDepartamento(this.id).then((res) => {
        this.departamento = res;
      });
    },
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then((res) => {
        console.log(res);
        this.$router.push("/departamentos");
      });
    },
  },
};
</script>
