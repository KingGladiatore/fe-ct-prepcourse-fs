function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevo_array = array.map((elemento, indice) => {
    return elemento * indice;
  });

  return nuevo_array;
}

module.exports = multiplicarElementosPorIndice;
