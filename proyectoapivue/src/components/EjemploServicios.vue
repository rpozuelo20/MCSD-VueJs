<template>
  <div>
    <h1>Ejemplo servicios Api</h1>
    <h2 style="color: blue">{{ saludo }}</h2>
    <h2 v-if="empleado">{{ empleado.apellido }}</h2>
    <h2 v-else>No hay empleado</h2>
  </div>
</template>
<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
//ESTO UNA CLASE JS, DEBEMOS TENER UN OBJETO
//PARA LLAMAR A SUS METODOS
const service = new ServiceEjemplo();
export default {
  name: "EjemploServicios",
  data() {
    return {
      saludo: "",
      empleado: null,
    };
  },
  mounted() {
    this.saludo = service.getSaludo("Alumno");
    service.getEmpleados(7839).then((res) => {
      this.empleado = res;
    });
    //nota: a las promesas se las llama con then
    service.getPromesa.then((res) => {
      //nota: aqui van los datos
      this.saludo = res;
    });
  },
};
</script>
