import Global from "./../components/Global";
import axios from "axios";

export default class ServiceEmpleados {
  getOficios() {
    return new Promise(function (resolve) {
      var request = "/api/empleados/oficios";
      var url = Global.urlapiempleados + request;
      var oficios = {};
      axios.get(url).then((res) => {
        oficios = res.data;
        resolve(oficios);
      });
    });
  }
  getEmpleadosOficios(data) {
    return new Promise(function (resolve) {
      var request = "/api/empleados/empleadosoficio/" + data;
      var url = Global.urlapiempleados + request;
      var empleados = [];
      axios.get(url).then((res) => {
        empleados = res.data;
        resolve(empleados);
      });
    });
  }
}
