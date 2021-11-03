<template>
  <div>
    <h1>Primer componente de Vue</h1>
    <h2>{{ saludo }}</h2>
    <h2>Hola, {{ nombre }}</h2>
    <img src="./../assets/images/vuewp.png" />
  </div>
</template>

<script>
export default {
  // nota: aqui dentro se declaran todas las zonas del componente
  name: "HolaMundo",
  data() {
    return {
      saludo: "Mi primer componente!!!",
      nombre: "Alumno Vue!!!",
    };
  },
};
</script>

<style scoped>
/*nota: para estilos se utiliza @import*/
@import "./../assets/css/estilosvue.css";
</style>
