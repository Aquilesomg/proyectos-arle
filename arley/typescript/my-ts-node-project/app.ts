let movimientos: number[] = [+100, -20, +50]; // Arreglo de transacciones (positivo = depósito, negativo = retiro)

const consultar = (): void => {
    let estado: string = "Últimos movimientos:\n";
    for (let i: number = 0; i < movimientos.length; i++) {
        estado += `Movimiento ${i + 1}: ${movimientos[i] >= 0 ? "+" : ""}${movimientos[i]}\n`;
    }
    estado += `\nSaldo actual: $${saldoActual()}`;
    alert(estado);
};

const saldoActual = (): number => {
    let saldo: number = 0;
    for (let i: number = 0; i < movimientos.length; i++) {
        saldo += movimientos[i];
    }
    return saldo;
};

const limiteRetiro: number = 500;

const depositar = (monto: number): void => {
    if (monto <= 0 || isNaN(monto)) {
        alert("Ingresa un monto válido para depositar.");
    } else {
        registrarMovimiento(monto);
        alert(`Has depositado $${monto}. Saldo actual: $${saldoActual()}`);
    }
};

const retirar = (monto: number): void => {
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

const registrarMovimiento = (monto: number): void => {
    if (movimientos.length === 5) {
        movimientos.shift(); // Elimina el más antiguo si ya hay 5
    }
    movimientos.push(monto);
};

// Menú principal
while (true) {
    let opcion: string = prompt(
        `1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\n\nSaldo actual: $${saldoActual()}\nElige una opción:`
    ) ?? "";

    if (opcion === "1") {
        consultar();
    } else if (opcion === "2") {
        const inputDepositar = prompt("Ingresa cantidad a depositar:");
        let num: number = parseFloat(inputDepositar !== null ? inputDepositar : "0");
        depositar(num);
    } else if (opcion === "3") {
        const inputRetirar = prompt("Ingresa cantidad a retirar:");
        let num = parseFloat(inputRetirar !== null ? inputRetirar : "0");
        retirar(num);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
