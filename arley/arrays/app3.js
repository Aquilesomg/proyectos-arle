let cola = [];
const MAX_COLA = 7;
const tiempoEspera = 10;
let atendiendo = false;
let tiempoRestante = 0;

const agregarCliente = () => {
    if (cola.length >= MAX_COLA) {
        alert("La cola está llena. No se pueden agregar más clientes.");
        return;
    }
    let nombre = prompt("Ingresa el nombre del cliente:");
    while (!nombre || !isNaN(nombre)) {
        alert("Nombre inválido. Por favor, ingresa un nombre válido.");
        nombre = prompt("Ingresa el nombre del cliente:");
    }
    cola.push(nombre);
    alert(`Cliente "${nombre}" agregado a la cola.`);

    if (!atendiendo) {
        atenderCliente();
    }
};

function atenderCliente() {
    if (cola.length === 0) {
        atendiendo = false;
        return;
    }

    atendiendo = true;
    let cliente = cola.shift();
    tiempoRestante = tiempoEspera;

    const intervalo = setInterval(() => {
        console.clear();
        console.log(`Atendiendo a: ${cliente}`);
        console.log(`Tiempo restante: ${tiempoRestante}s`);
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(intervalo);
            alert(`Cliente ${cliente} atendido.`);
            atenderCliente();
        }
    }, 1000);
}

const mostrarCola = () => {
    let estado = "Clientes en cola:\n";
    if (cola.length === 0) {
        estado += "La cola está vacía.";
    } else {
        for (let i = 0; i < cola.length; i++) {
            estado += `${i + 1}. ${cola[i]}\n`;
        }
    }
    estado += `\nTotal: ${cola.length} / ${MAX_COLA}`;
    alert(estado);
};

const menu = () => {
    const loop = setInterval(() => {
        let opcion = prompt(
            `1. Agregar cliente\n2. Ver cola\n3. Salir\n\nClientes en cola: ${cola.length}/${MAX_COLA}\n` +
            `Tiempo para siguiente atención: ${tiempoRestante > 0 ? tiempoRestante + "s" : "esperando..."}\n` +
            `Elige una opción:`
        );

        if (opcion === "1") {
            agregarCliente();
        } else if (opcion === "2") {
            mostrarCola();
        } else if (opcion === "3") {
            alert("Saliendo...");
            clearInterval(loop);
        } else {
            alert("Opción inválida.");
        }
    }, 100); 
};

menu();
