<template>
  <div class="container w-50 border rounded text-center p-3 bg-light">
    <h2 class="fw-bold mb-3">Modificar personaje</h2>
    <hr />
    <div>
      <form method="POST">
        <div class="container mb-3">
          <label class="form-label">Nombre del personaje</label>
          <input class="form-control" type="text" />
        </div>
        <div class="container mb-3">
          <label class="form-label">Imagen del personaje</label>
          <input class="form-control" type="text" />
        </div>
        <button class="btn btn-success w-50">Modificar personaje</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModificarPersonaje",
};
</script>
