module.exports = {
    // Cambia el puerto predeterminado de Node-RED
    uiPort: process.env.PORT || 1880,

    // Define dónde guardar los flujos
    flowFile: './flows/flows.json', // Cambia esto a la ubicación de tu flows.json

    // Configurar el almacén de contexto en memoria
    contextStorage: {
        default: {
            module: "memory"
        }
    },

    // Configurar la zona horaria
    timezone: "America/Bogota",

    // Configurar el editor de flujos
    disableEditor: false,  // Si está en "true", el editor de flujos será deshabilitado

    // Habilitar la instalación de nodos a través del editor
    externalModules: {
        autoInstall: false, // Desactiva la instalación automática de módulos si prefieres manejarla manualmente
        palette: {
            allowInstall: true
        }
    },

    // Ajustes para el log de eventos
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },



  };
  