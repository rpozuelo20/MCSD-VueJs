<template>
  <div class="border p-2 bg-success">
    <h1 class="bg-light p-3">This is multiplicar.</h1>
    <div class="p-3 border bg-light">
      <div>
        <label>Numero 1=</label
        ><input v-model="num1" type="number" placeholder="0" />
        <button v-on:click="num1 = num1 * 2">Duplicar valor</button>
        <button v-on:click="num1 = num1 * 3">Triplicar valor</button>
        <div class="pt-3">
          <button v-on:click="status = true">Mostrar tabla</button>
          <button v-on:click="status = false">Quitar tabla</button>
        </div>
      </div>
    </div>
    <div class="p-3 border bg-light" v-if="status == true">
      <h2>Tabla de multiplicar</h2>
      <ul>
        <li v-for="numero in numeros" :key="numero">
          La multiplicacion de {{ num1 }} por {{ numero }} es
          {{ num1 * numero }}.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Multiplicar",
  method: {
    mostrarTabla() {
      this.tabla = "";
      for (var i = 1; i <= 10; i++) {
        var op = parseInt(this.numero) * i;
        this.tabla += "<tr>";
        this.tabla += "<td>" + this.numero + " * " + i + "</td>";
        this.tabla += "<td>" + op + "</td>";
        this.tabla += "</tr>";
      }
    },
  },
  data() {
    return {
      num1: 1,
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      status: false,
    };
  },
};
</script>
