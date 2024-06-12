let numero = 5;
let decimal = 5.2;
let cadena = 'Ragnar';
let vacio = null;
let objeto = {
  'propiedad1':'probando'
}
let indefinido;

let id = Symbol('id');

var persona = {
  'nombre':'kevin causado',
  [id]: 123456
}

// console.log(persona[id]);
console.log(Object.keys(persona).length);
console.log(Object.getOwnPropertySymbols(persona));