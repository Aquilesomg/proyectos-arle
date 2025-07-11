/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Elefante", "León", "Tigre"];

// 2. Añade dos más. Uno al principio y otro al final

animales.push("Rinoceronte");
animales.unshift("Cebra");

console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set(["El Quijote", "Cien años de soledad", "Crimen y castigo", "1984", "El gran Gatsby"]);

// 5. Añade dos más. Uno de ellos repetido

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map