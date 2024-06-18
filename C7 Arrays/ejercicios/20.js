function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let key = false;
  let validador = 1;
  let valor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (valor === array[i]) validador++;
  }

  if (validador === array.length) key = true;

  return key;
}

module.exports = todosIguales;
