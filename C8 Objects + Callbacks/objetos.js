var objeto = {
  nombre: "Loraine",
  apellido: "Causado",
  unir_nombre: function () {
    return this.nombre + " " + this.apellido;
  },
};

objeto.email = "kevincausado@gmail.com";
// delete objeto.apellido;
console.log(objeto['apellido']);
console.log(objeto.apellido);

// for (let propiedad in objeto) {
//   console.log(`${propiedad} : ${objeto[propiedad]}`);
// }

var key = objeto.hasOwnProperty("nombre");

// console.log(Object.keys(objeto).length);

var disparador = (funcion_parametro) => {
  console.log(funcion_parametro);
};

// function disparador (funcion_parametro) {
//   console.log((funcion_parametro));
// }

disparador(objeto['unir_nombre']());
