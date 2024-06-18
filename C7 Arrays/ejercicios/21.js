function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let cantidad_meses = 3;
  let nuevo_array = [];
  array.forEach((elemento) => {
    if (elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre") {
      nuevo_array.push(elemento);
    }
  });

  if (cantidad_meses === nuevo_array.length) return nuevo_array;
  else return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
