function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let n = numeros.length + 1;
  let suma_total = (n * (n + 1)) / 2;
  let suma_array = numeros.reduce((a, b) => a + b, 0);
  let numero_faltante = suma_total - suma_array;

  return numeros.includes(numero_faltante) || numero_faltante > numeros.length ? null : numero_faltante;
}

module.exports = encontrarNumeroFaltante;
