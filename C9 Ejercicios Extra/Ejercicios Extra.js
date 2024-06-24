/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array_padre = [];
  for (const key in objeto) {
    array_padre.push([key, objeto[key]]);
  }
  return array_padre;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let array_string = string.split("");
  let objeto = {};

  array_string.forEach((letra_llave) => {
    if (objeto.letra == undefined) objeto[letra_llave] = null;
    array_string.forEach((letra_valor) => {
      if (letra_llave === letra_valor) objeto[letra_llave] += 1;
    });
  });

  let claves_ordenadas = Object.keys(objeto).sort(); // [a,b,c,d...]
  let objeto_ordenado = {};

  for (const key of claves_ordenadas) {
    objeto_ordenado[key] = objeto[key];
  }

  return objeto_ordenado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let array_minuscula = [];
  let array_mayuscula = [];
  let string_final = "";

  string.split("").forEach((letra) => {
    if (letra == letra.toLocaleUpperCase()) array_mayuscula.push(letra);
  });
  string.split("").forEach((letra) => {
    if (letra == letra.toLocaleLowerCase()) array_minuscula.push(letra);
  });
  string_final = array_mayuscula.join("") + array_minuscula.join("");

  return string_final;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let frase_invertida = "";
  let array_frase = frase.split(" ");

  array_frase.forEach((palabra, index) => {
    if (array_frase.length - 1 !== index) frase_invertida += palabra.split("").toReversed().join("") + " ";
    else frase_invertida += palabra.split("").toReversed().join("");
  });

  return frase_invertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  if (numero == numero.toString().split("").toReversed().join("")) return "Es capicua";
  else return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let nuevo_String = [];

  string.split("").forEach((letra) => {
    if (letra !== "a" && letra !== "b" && letra !== "c") nuevo_String.push(letra);
  });

  return nuevo_String.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let nuevo_array = [];
  array1.forEach((elemento) => {
    if (array2.includes(elemento)) nuevo_array.push(elemento);
  });

  return nuevo_array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
