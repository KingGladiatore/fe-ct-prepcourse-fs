function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
  let array_invertido = [];
  for (let i = texto.length - 1; i >= 0; i--) {
    array_invertido.push(texto[i]);
  }

  let unir_array_invertido = array_invertido.join("");

  return unir_array_invertido;
}

module.exports = invertirTexto;
