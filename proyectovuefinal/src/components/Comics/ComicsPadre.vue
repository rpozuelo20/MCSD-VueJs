<template>
  <div class="container text-center">
    <h1>Comics padre</h1>
    <hr />
    <div class="d-flex flex-column align-items-center">
      <label>Nombre: </label><input type="text" v-model="nom" /><br />
      <label>Imagen: </label><input type="text" v-model="img" /><br />
      <label>Descripcion: </label><input type="text" v-model="des" /><br />
      <button
        class="mt-3"
        v-if="nom && img && des"
        @click="insertarComicPadre()"
      >
        Insertar comic
      </button>
    </div>
    <hr />
    <h2 class="bg-success text-light pt-2 pb-2" v-if="favorito">
      El comic favorito es {{ favorito }}
    </h2>
    <div class="row row-cols-auto justify-content-center">
      <ComicHijo
        v-for="(comic, index) in comics"
        :key="index"
        :titulo="comic.titulo"
        :imagen="comic.imagen"
        :descripcion="comic.descripcion"
        v-on:comicFavoritoPadre="comicFavoritoPadre"
        v-on:eliminarComicPadre="eliminarComicPadre"
        v-on:modificarComicPadre="modificarComicPadre"
        :array="index"
      />
    </div>
  </div>
</template>

<script>
import ComicHijo from "./ComicHijo.vue";
export default {
  name: "ComicsPadre",
  methods: {
    comicFavoritoPadre(data) {
      console.log(data);
      this.favorito = data;
    },
    insertarComicPadre() {
      var comic = {
        titulo: this.nom,
        imagen: this.img,
        descripcion: this.des,
      };
      this.comics.push(comic);
    },
    eliminarComicPadre(data) {
      console.log(data);
      this.comics.splice(data, 1);
    },
    modificarComicPadre(data) {
      var comic = {
        titulo: this.nom,
        imagen: this.img,
        descripcion: this.des,
      };
      if (comic.titulo) {
        this.comics[data].titulo = comic.titulo;
      }
      if (comic.imagen) {
        this.comics[data].imagen = comic.imagen;
      }
      if (comic.descripcion) {
        this.comics[data].descripcion = comic.descripcion;
      }
    },
  },
  data() {
    return {
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
        },
        {
          titulo: "GuardianGal",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot",
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
        },
        {
          titulo: "Batman",
          imagen:
            "http://www.xn--vietario-e3a.com/wp-content/uploads/2017/01/batmanre.jpg",
          descripcion: "Murcielago",
        },
      ],
      favorito: "",
      nom: "",
      img: "",
      des: "",
    };
  },
  components: {
    ComicHijo,
  },
};
</script>
