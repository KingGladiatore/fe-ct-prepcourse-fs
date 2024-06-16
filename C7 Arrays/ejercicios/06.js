function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let array_invertido = [];

  for (let i = 0; i < array.length; i++) {
    array_invertido.unshift(array[i]);
  }

  return array_invertido;
}

module.exports = invertirArray;
