/*
const fs = require('fs');

// Ruta al archivo JSON
const rutaArchivoJSON = 'asd.json';

// Lee el contenido del archivo JSON
fs.readFile(rutaArchivoJSON, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    // Analiza el contenido como JSON
    const datosJSON = JSON.parse(data);
    console.log('Datos del archivo JSON:', datosJSON);
    // Aquí puedes trabajar con los datos obtenidos
  } catch (error) {
    console.error('Error al analizar el JSON:', error);
  }
});
*/


const fs = require('fs');

const rutaArchivoJSON = 'asd.json';

// Datos que deseas agregar al archivo JSON
const nuevosDatos = {
  nuevoCampo: 'Nuevo valor',
  nuevaPropiedad: 42
};

// Leer el contenido actual del archivo JSON
fs.readFile(rutaArchivoJSON, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    // Analizar el contenido como JSON
    const datosJSON = JSON.parse(data);

    // Agregar los nuevos datos al objeto
    Object.assign(datosJSON, nuevosDatos);

    // Convertir el objeto modificado a una cadena JSON
    const datosActualizadosJSON = JSON.stringify(datosJSON, null, 2);

    // Escribir los datos actualizados en el archivo
    fs.writeFile(rutaArchivoJSON, datosActualizadosJSON, 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo:', err);
        return;
      }

      console.log('Datos agregados correctamente al archivo JSON.');
    });
  } catch (error) {
    console.error('Error al analizar el JSON:', error);
  }
});