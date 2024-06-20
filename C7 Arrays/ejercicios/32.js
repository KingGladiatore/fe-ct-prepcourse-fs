function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  let invertir_array = [];
  for (let i = string.length - 1; i >= 0; i--) {
    invertir_array.push(string[i]);
  }

  let unir_array = invertir_array.join("");
  if (unir_array === string) return true;
  else return false;
}

module.exports = esPalindromo;
