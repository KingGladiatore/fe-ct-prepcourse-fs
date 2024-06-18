function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let cantidad_elementos = resultadosTest.length;
  let suma_total = 0;

  resultadosTest.forEach((elemento) => {
    suma_total += elemento;
  });

  return suma_total / cantidad_elementos;
}

module.exports = promedioResultadosTest;
