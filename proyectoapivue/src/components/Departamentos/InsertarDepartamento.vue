<template>
  <div>
    <h1>Insertar Departamento</h1>
    <div class="w-75 border p-3 bg-dark rounded">
      <form method="POST" v-on:submit.prevent="insertarDepartamento()">
        <div class="form-group">
          <label class="text-light fw-bold">Numero</label>
          <input
            type="number"
            class="form-control"
            v-model="departamento.numero"
          />
        </div>
        <div class="form-group">
          <label class="text-light fw-bold">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.nombre"
          />
        </div>
        <div class="form-group">
          <label class="text-light fw-bold">Localidad</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.localidad"
          />
        </div>
        <center>
          <button class="btn btn-success mt-3 w-50">Insertar</button>
        </center>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
  name: "InsertarDepartamento",
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
  methods: {
    insertarDepartamento() {
      //convertir los datos string a int para el servicio
      this.departamento.numero = parseInt(this.departamento.numero);
      service.insertarDepartamento(this.departamento).then((res) => {
        console.log(res);
        // return (window.location.href = "/departamentos");
        this.$router.push("/departamentos"); // nos redirecciona hacia departamentos
      });
    },
  },
};
</script>
