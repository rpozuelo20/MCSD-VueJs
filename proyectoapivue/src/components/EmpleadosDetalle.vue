<template>
  <div>
    <h1>Empleados detalles Api</h1>
    <form method="POST" v-on:submit.prevent="cargarDatosEmpleado">
      <div class="mb-3">
        <label class="form-label">Seleccione un empleado</label>
        <!--nota: podria poner @change="cargarDatosEmpleado" en el select para que cuando el valor cambie se haga automaticamente-->
        <select v-model="idempleado" class="form-select">
          <option
            :value="empleado.idEmpleado"
            v-for="(empleado, index) in empleados"
            :key="index"
          >
            {{ empleado.apellido }}
          </option>
        </select>
        <button class="btn btn-success mt-3">Mostrar datos</button>
      </div>
      <div v-if="this.empleado" class="container">
        <p>
          El empleado {{ this.empleado.apellido }} tiene un oficio de
          {{ this.empleado.oficio }}, trabaja en el departamento
          {{ this.empleado.departamento }} y cobra {{ this.empleado.salario }}$.
        </p>
      </div>
      <div v-else class="container">
        <h2>Seleccione un empleado para ver sus datos.</h2>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Global from "./Global";

export default {
  name: "EmpleadosDetalle",
  mounted() {
    this.cargarEmpleados();
  },
  methods: {
    cargarEmpleados() {
      var request = "api/Empleados";
      var url = Global.urlapiempleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
      });
    },
    cargarDatosEmpleado() {
      var request = "api/Empleados/" + this.idempleado;
      var url = Global.urlapiempleados + request;
      axios.get(url).then((res) => {
        this.empleado = res.data;
      });
    },
  },
  data() {
    return {
      empleados: [],
      idempleado: 0,
      empleado: null,
    };
  },
};
</script>
