let cola = new Set(); 
const MAX_COLA = 7;


const agregarCliente = () => {
    if (cola.size >= MAX_COLA) {
        alert("La cola está llena. No se pueden agregar más clientes.");
        return;
    } else {
    let nombre = prompt("Ingresa el nombre del cliente:");
    while (!nombre || !isNaN(nombre)) {
        alert("Nombre inválido. Por favor, ingresa un nombre válido.");
        nombre = prompt("Ingresa el nombre del cliente:");
    }
        cola.add(nombre);
        alert(`Cliente "${nombre}" agregado a la cola.`);
}};
const atenderCliente = () => {
    if (cola.size === 0) {
        alert("No hay clientes en la cola.");
        return;
    }
    let atendido = prompt("Ingrese el nombre del cliente:");
    if (!atendido) {
        alert("Operación cancelada o nombre inválido.");
        return;
    }
    if (cola.has(atendido)) {
        alert(`Cliente ${atendido} atendido.`);
        cola.delete(atendido);
        alert(`Cliente ${atendido} eliminado de la cola.`);
    } else {
        alert("El cliente no está en la cola.");
    }
};

const mostrarCola = () => {
    let estado = "Clientes en cola:\n";
    if (cola.size === 0) {
        estado += "La cola está vacía.";
    } else {
        let index = 1;
        for (let cliente of cola) {
            estado += `${index}. ${cliente}\n`;
            index++;
        }
    }
    estado += `\nTotal: ${cola.size} / ${MAX_COLA}`;
    alert(estado);
};


while (true) {
    let opcion = prompt(
        `1. Agregar cliente\n2. Atender cliente\n3. Ver cola\n4. Salir\n\nClientes en cola: ${cola.size}/${MAX_COLA}\nElige una opción:`
    );

    if (opcion === "1") {
        agregarCliente();
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        mostrarCola();
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
