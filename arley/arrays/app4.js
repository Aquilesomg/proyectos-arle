let productos = ["galletas", "papas", "chocolatina", " gaseosa", "chicle"];
let stock = [5, 3, 0, 2, 1];

function mostrarInevntario  () {
    let inventario = "inventario\n";
    for (let i=0; i < productos.length; i++) {
        inventario += (i + 1) + "." + productos[i] + " - stock: " + stock[i] + "\n";
    }
    alert (inventario);
}
function comprarProductos() {
    let codigo = parseInt(prompt("ingrese el codigo de del producto (1-5):"));
    if (codigo <1 || codigo >5) {
        alert("codigo invalido. usa un numero del 1 al 5.");
    }
    else if (stock[codigo - 1] === 0) {
        let sugerido =-1;
        for(let i=0;i< stock.length; i++) {
            if (stock[i] >0) {
                sugerido = i;
                break;
            }
        }
        if (sugerido !==-1) {
            alert(`prodcuto agotado, sugerimos: ${productos[sugerido]}`);
        } else {
            alert("todos los productos estan agotados");
        }
    } else {
        stock[codigo -1]--;
        alert("has comprado " + productos[codigo -1] +"con exito");
    }
}

while (true) {
    let opcion = prompt("1. ver inventario\n2. comprar producto\n3. salir\nElige una opcion:");
    if(opcion === "1") {
        mostrarInevntario();
    } else if ( opcion === "2") {
        comprarProductos();
    } else if ( opcion === "3") {
        alert("gracias por su compra");
        break;
    } else {
        alert ("opcion invalida");
    }
}