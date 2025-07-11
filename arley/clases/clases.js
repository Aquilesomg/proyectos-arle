
class Habitacion {
  constructor(tipo, esFumador) {
    this.tipo = tipo; 
    this.esFumador = esFumador;
    this.permiteMascotas = (tipo === 'familiar');
    this.estaReservada = false;
  }
}

class Hotel {
  constructor() {
    this.habitaciones = [];
    this.reservas = [];

    for (let i = 0; i < 3; i++) {
      this.habitaciones.push(new Habitacion('individual', false));
      this.habitaciones.push(new Habitacion('doble', false));
      this.habitaciones.push(new Habitacion('familiar', false));
    }
  }

  hacerReserva() {
    let nombre = prompt("Ingresa tu nombre:");
    let pais = prompt("Ingresa tu país de origen:");
    let fechaEntrada = prompt("Fecha de entrada (DD/MM/AAAA):");
    let fechaSalida = prompt("Fecha de salida (DD/MM/AAAA):");
    let mascotasStr = prompt("¿Traes mascota? (sí/no):").toLowerCase();
    let mascotas = mascotasStr === "sí";
    let numeroPersonas = parseInt(prompt("¿Cuántas personas se alojarán?"));
    if (isNaN(numeroPersonas) || numeroPersonas <= 0) {
      alert("Número de personas inválido.");
      return;
    }

    let tipoHabitacion = prompt("¿Qué tipo de habitación deseas? (individual, doble, familiar):").toLowerCase();
    if (!["individual", "doble", "familiar"].includes(tipoHabitacion)) {
      alert("Tipo de habitación inválido.");
      return;
    }

    let fumadorStr = prompt("¿Deseas habitación para fumadores? (sí/no):").toLowerCase();
    let esFumador = fumadorStr === "sí";


    let limite = tipoHabitacion === 'individual' ? 2 :
                 tipoHabitacion === 'doble' ? 4 :
                 tipoHabitacion === 'familiar' ? 6 : 0;

    if (numeroPersonas > limite) {
      alert(`Número de personas excede el límite para habitación ${tipoHabitacion} (${limite} personas).`);
      return;
    }

    // Validar mascotas
    if (mascotas && tipoHabitacion !== 'familiar') {
      alert("Solo se permiten mascotas en habitaciones familiares.");
      return;
    }

    // Buscar habitación disponible
    let habitacion = this.habitaciones.find(h =>
      h.tipo === tipoHabitacion &&
      h.esFumador === esFumador &&
      !h.estaReservada
    );

    if (habitacion) {
      habitacion.estaReservada = true;
      this.reservas.push({
        nombre,
        pais,
        fechaEntrada,
        fechaSalida,
        mascotas,
        numeroPersonas,
        tipoHabitacion
      });

      alert(`Reserva confirmada para ${nombre} en una habitación ${tipoHabitacion}.`);
    } else {
      alert("Lo siento, no hay habitaciones disponibles con esas características.");
    }
  }

  cancelarReserva() {
    let nombre = prompt("Ingresa tu nombre para cancelar la reserva:");
    let reservaIndex = this.reservas.findIndex(r => r.nombre === nombre);

    if (reservaIndex !== -1) {
      this.habitaciones.forEach(h => {
        if (h.tipo === this.reservas[reservaIndex].tipoHabitacion) {
          h.estaReservada = false;
        }
      });
      this.reservas.splice(reservaIndex, 1);
      alert("Reserva cancelada con éxito.");
    } else {
      alert("No se encontró ninguna reserva a nombre de " + nombre);
    }
  }

  verEstadisticas() {
    let totalPersonas = this.reservas.reduce((sum, r) => sum + r.numeroPersonas, 0);
    let conMascotas = this.reservas.filter(r => r.mascotas).length;

    let detalle = this.reservas.map((r, i) =>
      `${i + 1}. ${r.nombre} (${r.pais}) - ${r.numeroPersonas} personas - ${r.tipoHabitacion} - Mascota: ${r.mascotas ? 'Sí' : 'No'}`
    ).join("\n");

    alert(`Reservas totales: ${this.reservas.length}\n` +
          `Total de personas hospedadas: ${totalPersonas}\n` +
          `Huéspedes con mascotas: ${conMascotas}\n\n` +
          `--- Detalle de reservas ---\n${detalle}`);
  }
}

// Ejecutar el sistema
const hotel = new Hotel();

while (true) {
  let opcion = prompt(
    `Sistema de reservas del Hotel\n\n` +
    `1. Hacer una reserva\n` +
    `2. Ver estadísticas\n` +
    `3. Salir\n\n` +
    `Elige una opción:`
  );

  if (opcion === "1") {
    hotel.hacerReserva();
  } else if (opcion === "2") {
    hotel.verEstadisticas();
  } else if (opcion === "3") {
    alert("Gracias por usar el sistema de reservas. ¡Hasta luego!");
    break;
  } else {
    alert("Opción no válida. Intenta de nuevo.");
  }
}
