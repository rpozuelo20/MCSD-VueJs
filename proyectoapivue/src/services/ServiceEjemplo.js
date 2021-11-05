import Global from "./../components/Global";
import axios from "axios";

export default class ServiceEjemplo {
  getSaludo(nombre) {
    return "Welcome to my service, " + nombre;
  }

  getPromesa = new Promise(function (resolve, reject) {
    var num = 0;
    if (num == 0) {
      //nota: debemos devolver algo dentro de resolve o en reject
      resolve("Ok!!!");
    } else {
      reject("Err!!!");
    }
  });

  getPromesaSimple = new Promise(function (resolve) {
    resolve();
  });

  getEmpleados(data) {
    return new Promise(function (resolve) {
      var request = "/api/empleados/" + data;
      var url = Global.urlapiempleados + request;
      var empleado = {
        apellido: "No  soy nadie...",
      };
      axios.get(url).then((res) => {
        empleado = res.data;
        resolve(empleado);
      });
    });
  }
}
