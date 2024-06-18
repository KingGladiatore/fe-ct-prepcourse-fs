function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let nuevo_array = [];

  let mensaje = "Se interrumpió la ejecución";
  for (let i = 0; i < 10; i++) {
    nuevo_array.push((num += 2));
    if (nuevo_array[i] === i) return mensaje;
  }

  return nuevo_array;
}

module.exports = breakStatement;
