function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let array_numeros_pares = []

  array.forEach(elemento => {
    if (elemento % 2 === 0) array_numeros_pares.push(elemento); 
  });

  return array_numeros_pares;
}

module.exports = filtrarNumerosPares;
