<template>
  <div>
    <h1>Ejemplo Ciclo Vida Hooks</h1>
    <h2>{{ saludo }}</h2>
    <button @click="cambiarSaludo()">Cambiar saludo</button>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  methods: {
    //not: aqui pondremos todos los metodos de la pagina
    cambiarSaludo() {
      this.saludo = "He cambiado!?!?!?";
    },
  },
  data() {
    return {
      saludo: "Hola Hooks!!!",
    };
  },
  mounted() {
    console.log("Componente montado");
  },
  created() {
    console.log("Componente creado");
  },
  destroyed() {
    console.log("Componente eliminado");
  },
  updated() {
    console.log("Componente actualizado");
  },
};
</script>
