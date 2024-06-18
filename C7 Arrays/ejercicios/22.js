function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let array_tabla_seis = [];

  for (let i = 0; i <= 10; i++) {
    array_tabla_seis.push(i * 6);
  }

  return array_tabla_seis;
}

module.exports = tablaDelSeis;
