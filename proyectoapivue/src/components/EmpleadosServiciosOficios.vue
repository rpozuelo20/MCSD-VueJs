<template>
  <div>
    <h1>Empleados Servicios Oficios</h1>
    <form method="POST" v-on:submit.prevent="cargarDatosEmpleado">
      <div class="mb-3">
        <label class="form-label">Seleccione un oficio</label>
        <!--nota: podria poner @change="cargarDatosEmpleado" en el select para que cuando el valor cambie se haga automaticamente-->
        <select
          @change="getEmpleados"
          class="form-select"
          v-model="oficioselect"
        >
          <option
            v-for="(oficio, index) in oficios"
            :key="index"
            :value="oficio"
          >
            {{ oficio }}
          </option>
        </select>
      </div>
    </form>
    <hr />
    <div class="container" v-if="oficioselect">
      <p v-for="(empleado, index) in empleados" :key="index">
        {{ empleado.apellido }}
      </p>
    </div>
    <div v-else class="container"><h2>Seleccione un oficio.</h2></div>
  </div>
</template>

<script>
import ServiceEmpleados from "./../services/ServiceEmpleados";
const service = new ServiceEmpleados();

export default {
  name: "EmpleadosServiciosOficios",
  data() {
    return {
      oficios: "",
      empleados: "",
      oficioselect: null,
    };
  },
  mounted() {
    service.getOficios().then((res) => {
      this.oficios = res;
    });
  },
  methods: {
    getEmpleados() {
      console.log(this.oficioselect);
      service.getEmpleados(this.oficioselect).then((res) => {
        this.empleados = res;
      });
    },
  },
};
</script>
