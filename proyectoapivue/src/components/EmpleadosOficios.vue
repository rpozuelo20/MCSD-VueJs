<template>
  <div>
    <h1>Oficios</h1>
    <form method="POST" v-on:submit.prevent="cargarDatosEmpleado">
      <div class="mb-3">
        <label class="form-label">Seleccione un oficio</label>
        <!--nota: podria poner @change="cargarDatosEmpleado" en el select para que cuando el valor cambie se haga automaticamente-->
        <select @change="cargarEmpleados" class="form-select" v-model="oficio">
          <option
            v-for="(oficio, index) in oficios"
            :key="index"
            :value="oficio"
          >
            {{ oficio }}
          </option>
        </select>
      </div>
      <hr />
      <div v-if="empleadosoficio" class="container">
        <p v-for="(empleado, index) in empleadosoficio" :key="index">
          El empleado {{ empleado.apellido }} pertenece al oficio
          {{ empleado.oficio }}.
        </p>
      </div>
      <div class="container" v-else>
        <h2>Seleccione un oficio para mostrar sus empleados.</h2>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Global from "./Global";

export default {
  name: "EmpleadosOficios",
  data() {
    return {
      oficios: {},
      oficio: "",
      empleadosoficio: null,
    };
  },
  methods: {
    cargarOficios() {
      var request = "/api/Empleados/Oficios";
      var url = Global.urlapiempleados + request;
      axios.get(url).then((res) => {
        this.oficios = res.data;
      });
    },
    cargarEmpleados() {
      var request = "api/Empleados/EmpleadosOficio/" + this.oficio;
      var url = Global.urlapiempleados + request;
      axios.get(url).then((res) => {
        this.empleadosoficio = res.data;
      });
    },
  },
  mounted() {
    this.cargarOficios();
  },
};
</script>
