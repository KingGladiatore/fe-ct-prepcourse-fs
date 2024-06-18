function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indice_mayor = 0;
  let mayor_valor = array[0];

  if (array.length === 0 || array === 1) return 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor_valor) {
      mayor_valor = array[i];
      indice_mayor = i;
    }
  }

  return indice_mayor;
}

module.exports = encontrarIndiceMayor;
