var animales = ["Ragnar", "Fiorella", "Sally"];

animales.push("Patty");
animales.unshift("Scarlet");

// animales.pop();
// animales.shift();

var condicion = animales.every((animal) => {
  return typeof animal === "string";
});

// console.log(animales.includes('Ragnar'));

// console.log(`Retorna al gato: ${condicion} `);

var jugador = "Cristiano Ronaldo";
var array_jugador = ["M", "e", "s", "s", "i"];

// console.log(jugador.split(' '));
// console.log(array_jugador.join(''));

animales.forEach((animal) => {
  console.log(animal);
});

var nuevo_animales = animales.map((animal) => {
  return animal + ':)'
})

console.log(nuevo_animales);