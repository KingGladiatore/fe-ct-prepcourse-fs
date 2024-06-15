function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let mult = 1;

  for (let i = min; i <= max; i++) {
    // if (i===0) continue;
    mult *= i;
  }

  if (min <= 0 && max >= 0) return 0;

  return mult;
}

module.exports = productoEntreNúmeros;
