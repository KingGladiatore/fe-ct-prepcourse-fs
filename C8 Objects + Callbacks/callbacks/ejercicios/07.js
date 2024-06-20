function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let nuevo_array = [];
  arrayOfStrings.forEach((elemento) => {
    // if (elemento[0] === "a") nuevo_array.push(elemento);
    if (elemento.slice(0,1) === "a") nuevo_array.push(elemento);
  });

  return nuevo_array;
}

module.exports = filter;
