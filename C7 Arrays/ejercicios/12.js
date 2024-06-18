function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let nuevo_array = [];
  array.forEach((elemento) => {
    nuevo_array.push(elemento.toUpperCase());
  });
  return nuevo_array;
}

module.exports = convertirStringAMayusculas;
