import Global from "./../components/Global";
import axios from "axios";

export default class ServiceChampions {
  getEquipos() {
    return new Promise(function (resolve) {
      var request = "/api/Equipos";
      var url = Global.urlapicrudchampions + request;
      axios.get(url).then((res) => {
        var equipos = res.data;
        resolve(equipos);
      });
    });
  }

  getEquipo(idequipo) {
    return new Promise(function (resolve) {
      var request = "/api/Equipos/" + idequipo;
      var url = Global.urlapicrudchampions + request;
      axios.get(url).then((res) => {
        var equipo = res.data;
        resolve(equipo);
      });
    });
  }

  getJugadores(idequipo) {
    return new Promise(function (resolve) {
      var request = "/api/Jugadores/JugadoresEquipo/" + idequipo;
      var url = Global.urlapicrudchampions + request;
      axios.get(url).then((res) => {
        var jugadores = res.data;
        resolve(jugadores);
      });
    });
  }

  getJugador(idjugador) {
    return new Promise(function (resolve) {
      var request = "/api/Jugadores/" + idjugador;
      var url = Global.urlapicrudchampions + request;
      axios.get(url).then((res) => {
        var jugador = res.data;
        resolve(jugador);
      });
    });
  }

  getApuestas() {
    return new Promise(function (resolve) {
      var request = "/api/Apuestas";
      var url = Global.urlapicrudchampions + request;
      axios.get(url).then((res) => {
        var apuestas = res.data;
        resolve(apuestas);
      });
    });
  }

  deleteApuesta(idapuesta) {
    return new Promise(function (resolve) {
      var request = "/api/Apuestas/" + idapuesta;
      var url = Global.urlapicrudchampions + request;
      axios.delete(url).then((res) => {
        resolve(res);
      });
    });
  }

  postApuesta(apuesta) {
    return new Promise(function (resolve) {
      var request = "/api/Apuestas";
      var url = Global.urlapicrudchampions + request;
      axios.post(url, apuesta).then((res) => {
        resolve(res);
      });
    });
  }
}
