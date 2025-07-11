async function obtenerYProcesarDatos() { 
  try { 
    const datos = await obtenerDatos(); 
    console.log("Datos obtenidos:", datos); 
    const resultado = await procesarDatos(datos); 
    console.log("Resultado:", resultado); 
  } catch (error) { 
    console.error("Error:", error); 
  } 
} 
 
function obtenerDatos() { 
  return new Promise(resolve => { 
    setTimeout(() => resolve({ id: 1, nombre: "Ana" }), 2000); 
  }); 
} 
 
function procesarDatos(datos) { 
  return new Promise(resolve => { 
    setTimeout(() => resolve(`Datos de ${datos.nombre} procesados`), 1000); 
  }); 
} 
 
obtenerYProcesarDatos(); 
console.log("Iniciando proceso..."); 