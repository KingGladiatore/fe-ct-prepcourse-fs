function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num > 20 && num < 50) return true;
  else if (num < 20 && num < 50) return false;
  else if (num < 0 && num > 50) return false;
  else return false;
}

module.exports = estaEnRango;
