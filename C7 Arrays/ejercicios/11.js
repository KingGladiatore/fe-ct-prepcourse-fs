function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let array_duplicado = [];
  array.forEach((elemento) => {
    array_duplicado.push(elemento * 2);
  });

  return array_duplicado;
}

module.exports = duplicarElementos;
