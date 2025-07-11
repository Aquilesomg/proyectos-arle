let cola = ["ruben", "juan", "pedro", "luis", "maria", "ana", "carla"]; 
const MAX_COLA = 7;
const tiempoEspera = 10;

function atenderCliente (){
    if (cola.length === 0) {
        console.log("No hay clientes en la cola para atender.");
        return;
    }
    let tiempoRestante = tiempoEspera;
    let atendido = cola.shift();
    console.log(`Cliente atendido: ${atendido}`);
    console.log(`Tiempo de espera: ${tiempoRestante} segundos`);
    const intervalo = setInterval(() => {
        tiempoRestante--;
        console.log(`Tiempo de espera: ${tiempoRestante} segundos`);
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            console.log(`Cliente ${atendido} atendido.`);
            atenderCliente();
        }
    }, 1000); 



};
atenderCliente();