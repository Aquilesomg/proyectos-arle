let movimientos = [+100, -20, +50]; // Arreglo de transacciones (positivo = depósito, negativo = retiro)

const consultar = () => {
    let estado = "Últimos movimientos:\n";
    for (let i = 0; i < movimientos.length; i++) {
        estado += `Movimiento ${i + 1}: ${movimientos[i] >= 0 ? "+" : ""}${movimientos[i]}\n`;
    }
    estado += `\nSaldo actual: $${saldoActual()}`;
    alert(estado);
};

const saldoActual = () => {
    let saldo = 0;
    for (let i = 0; i < movimientos.length; i++) {
        saldo += movimientos[i];
    }
    return saldo;
};

const limiteRetiro = 500;

const depositar = (monto) => {
    if (monto <= 0 || isNaN(monto)) {
        alert("Ingresa un monto válido para depositar.");
    } else {
        registrarMovimiento(monto);
        alert(`Has depositado $${monto}. Saldo actual: $${saldoActual()}`);
    }
};

const retirar = (monto) => {
    if (monto <= 0 || isNaN(monto)) {
        alert("Ingresa un monto válido para retirar.");
    } else if (monto > limiteRetiro) {
        alert("No puedes retirar más de $500 en una sola transacción.");
    } else if (monto > saldoActual()) {
        alert("Saldo insuficiente para retirar esa cantidad.");
    } else {
        registrarMovimiento(-monto);
        alert(`Has retirado $${monto}. Saldo actual: $${saldoActual()}`);
    }
};

const registrarMovimiento = (monto) => {
    if (movimientos.length === 5) {
        movimientos.shift(); // Elimina el más antiguo si ya hay 5
    }
    movimientos.push(monto);
};

// Menú principal
while (true) {
    let opcion = prompt(
        `1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\n\nSaldo actual: $${saldoActual()}\nElige una opción:`
    );

    if (opcion === "1") {
        consultar();
    } else if (opcion === "2") {
        let num = parseFloat(prompt("Ingresa cantidad a depositar:"));
        depositar(num);
    } else if (opcion === "3") {
        let num = parseFloat(prompt("Ingresa cantidad a retirar:"));
        retirar(num);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
