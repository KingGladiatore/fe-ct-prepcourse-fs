const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  let resultado = "No se encontró el elemento";
  if (array.length > 0) {
    array.forEach((elemento) => {
      if (callback(elemento)) resultado = elemento;
    });
  }

  return resultado;
};

module.exports = buscarElemento;
