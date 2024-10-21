# Node-RED Project - Production Module

Este es un proyecto de **Node-RED** para gestionar un módulo de producción. El objetivo del proyecto es simular datos, procesarlos y tomar decisiones automatizadas.

## Requisitos

- **Node.js**: Asegúrate de tener instalado Node.js versión 16.x o 18.x.
- **Node-RED**: Este proyecto utiliza Node-RED versión 3.x.x o superior

## Instalación

### 1. Instalar las dependencias:
Clona el repositorio en tu máquina local y navega al directorio del proyecto:
```bash
git clone https://github.com/tu-usuario/evergreen-node-red.git
cd evergreen-node-red
```

### 2. Instalar las dependencias:
```bash
npm install
```

### 4. Ejecutar Node-RED utilizando el archivo de flujos:
Cambiar el directorio de trabajo de Node-RED
```bash
node-red -u .
```


### 5. Abre `http://localhost:1880` en tu navegador para acceder a la interfaz de Node-RED.

## Estructura del Proyecto

- `flows/`: Contiene los flujos personalizados en formato JSON.
- `package.json`: Dependencias y scripts del proyecto.
- `.gitignore`: Archivos y carpetas ignorados por Git.

## Exportar e importar flujos

Para importar o exportar los flujos en Node-RED, ve al menú de la esquina superior derecha de la interfaz de Node-RED.

