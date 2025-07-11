let productos = ["Pan", "Leche", "Huevos", "Queso", "Café"];
let stock = [5, 3, 0, 2, 1];

function mostrarInventario() {
    let inventario = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += `${i + 1}. ${productos[i]} - Stock: ${stock[i]}\n`;
    }
    alert(inventario);
}

function comprarProductos() {
    let codigo = parseInt(prompt("Ingrese el código del producto (1-5):"));
    if (codigo < 1 || codigo > 5) {
        alert("Código inválido. Usa un número del 1 al 5.");
    } else if (stock[codigo - 1] === 0) {
        let sugerido = -1;
        for (let i = 0; i < stock.length; i++) {
            if (stock[i] > 0) {
                sugerido = i;
                break;
            }
        }
        if (sugerido !== -1) {
            alert("Producto agotado, sugerimos: " + productos[sugerido]);
        } else {
            alert("Todos los productos están agotados.");
        }
    } else {
        stock[codigo - 1]--;
        alert("Has comprado " + productos[codigo - 1] + " con éxito.");
    }
}

while (true) {
    let opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        comprarProductos();
    } else if (opcion === "3") {
        alert("Gracias por su compra");
        break;
    } else {
        alert("Opción inválida");
    }
}
