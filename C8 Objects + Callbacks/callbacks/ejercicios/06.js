function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let nuevo_array = [];
  array.forEach((elemento) => {
    nuevo_array.push(cb(elemento));
  });

  return nuevo_array;
}

module.exports = map;
