<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueApi</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/coches">Coches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosdetalle"
              >EmpleadosDetalle</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosoficios"
              >EmpleadosOficios</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ejemploservicios"
              >EjemploServicios</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosserviciosoficios"
              >EmpleadosServiciosOficios</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/departamentos"
              >Departamentos</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
