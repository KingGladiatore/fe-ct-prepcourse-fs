function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma_array = 0;

  arrayOfNums.forEach((elemento) => {
    suma_array += elemento;
  });

  return suma_array;
}

module.exports = agregarNumeros;
