function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let elemento = null;

  for (let i = 0; i < array.length; i++) {
    elemento = array[i];    
  }

  return elemento;
}

module.exports = devolverUltimoElemento;
