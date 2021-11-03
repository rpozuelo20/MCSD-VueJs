<template>
  <div>
    <h3>Componente Menu</h3>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/cinema">Cinema</router-link>
        </li>
        <li>
          <router-link to="/television">Television</router-link>
        </li>
        <li>
          <router-link to="/music">Music</router-link>
        </li>
        <li>
          <router-link to="/ciclovida">Ciclo Vida</router-link>
        </li>
        <li>
          <router-link to="/juegosconmutados">Juegos Conmutados</router-link>
        </li>
        <li>
          <router-link to="/directivas">Directivas Vue</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
ul li {
  display: inline;
  margin: 0px 2em;
  background-color: whitesmoke;
}
</style>
