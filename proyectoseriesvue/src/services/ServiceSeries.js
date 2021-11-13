import Global from "./../components/Global";
import axios from "axios";

export default class ServiceSeries {
  putPersonajeSerie(idPerso, idSerie) {
    return new Promise(function (resolve) {
      var request = "/api/Personajes/" + idPerso + "/" + idSerie;
      var url = Global.urlapiseries + request;
      axios.put(url).then((res) => {
        resolve(res);
      });
    });
  }
  deletePersonaje(id) {
    return new Promise(function (resolve) {
      var request = "/api/Personajes/" + id;
      var url = Global.urlapiseries + request;
      axios.delete(url).then((res) => {
        resolve(res);
      });
    });
  }
  postPersonaje(data) {
    return new Promise(function (resolve) {
      var request = "/api/Personajes";
      var url = Global.urlapiseries + request;
      axios.post(url, data).then((res) => {
        resolve(res);
      });
    });
  }
  getSerie(id) {
    return new Promise(function (resolve) {
      var request = "/api/Series/" + id;
      var url = Global.urlapiseries + request;
      axios.get(url).then((res) => {
        var serie = res.data;
        resolve(serie);
      });
    });
  }
  getSeries() {
    return new Promise(function (resolve) {
      var request = "/api/Series";
      var url = Global.urlapiseries + request;
      axios.get(url).then((res) => {
        var series = res.data;
        resolve(series);
      });
    });
  }
  getPersonajes(id) {
    return new Promise(function (resolve) {
      var request = "/api/Series/PersonajesSerie/" + id;
      var url = Global.urlapiseries + request;
      axios.get(url).then((res) => {
        var personajes = res.data;
        resolve(personajes);
      });
    });
  }
  getPersonajesAll() {
    return new Promise(function (resolve) {
      var request = "/api/Personajes";
      var url = Global.urlapiseries + request;
      axios.get(url).then((res) => {
        var personajes = res.data;
        resolve(personajes);
      });
    });
  }
}
