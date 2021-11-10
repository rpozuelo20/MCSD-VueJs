import Global from "./../components/Global";
import axios from "axios";

export default class ServiceSeries {
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
}
