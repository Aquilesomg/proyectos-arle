let cola = [];
let nombre = prompt("Ingresa el nombre del cliente:");
while (!nombre || !isNaN(nombre)) {
    alert("Nombre inválido. Por favor, ingresa un nombre válido.");
    nombre = prompt("Ingresa el nombre del cliente:");
}

cola.push(nombre);
console.log("Cliente agregado:", nombre);
