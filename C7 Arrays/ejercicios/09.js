function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let min = 1;
  let max = array.length;

  if (array.length === 1) return array[0];
  else return array[Math.floor(Math.random() * (max - min) + min)];
}

module.exports = obtenerElementoAleatorio;
