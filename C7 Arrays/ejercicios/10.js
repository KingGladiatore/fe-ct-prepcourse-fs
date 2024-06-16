function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let mas_largo = undefined;
  array.forEach((elemento) => {
    if (mas_largo === undefined) {
      if (elemento.length >= 5) mas_largo = elemento;
    }
  });
  return mas_largo;
}

module.exports = obtenerPrimerStringLargo;
