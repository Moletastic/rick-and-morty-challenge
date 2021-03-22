# Rick and Morty Challenge

Rick and morty challenge es un desafío basado en el uso de la api https://rickandmortyapi.com/ como fuente de datos para realizar 2 tareas principales.
Estas tareas se orientan al hallazgo de incidencias de caracteres según entidad y un agrupamiento de datos para un reporte de aparición por episodio.
Ambas tareas deben ser resueltas con un aproximado en tiempo de 3 segundos (sujeto a conexión de internet).

Este desafío no presenta requisitos en tecnologías por utilizar.

Este repositorio presenta una solución a Rick And Morty Challenge utilizando:

-   [**Typescript**](https://github.com/Microsoft/TypeScript) v4.2.3
-   [**Axios**](https://github.com/axios/axios) v0.21.1

Para mas detalles sobre el uso de Rick And Morty API, revisar su respectiva [documentación](https://rickandmortyapi.com/documentation).

# 📄 Instrucciones

## Consultar los `characters`, `locations` y `episodes` de https://rickandmortyapi.com/ e indicar:

### 1. Char counter:

    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total

### 2. Episode locations:

    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total

# Uso

## 📦 Requerimientos

-   [node/npm](https://nodejs.org/en/download/): Node.js (v.14.16.0) + Node Package Manager (v6.14.11)

## 📦 Instalación

Para instalar las dependencias requeridas utilizar el comando:

```bash
npm install
```

## 🧪 Ejecución de Testing

Para ejecutar la suite de testing basada en [jest](https://jestjs.io/) ([ts-jest](https://github.com/kulshekhar/ts-jest)), utilizar el comando:

```bash
npm run test
```

## ⚙️ Compilación y Ejecución

Para ejecutar el script es necesario transpilar el código antes de su ejecución como se muestra a continuación:

```bash
npm run build # Transpilación de Typescript
node dist/index.js # Ejecución de script
env VERBOSE=true node dist/index.js # Modo verbose
```

## ⚙️ Ejecución Rápida

El script puede ser transpilado y ejecutado rápidamente basado en el uso de [ts-node-dev](https://github.com/wclr/ts-node-dev) utilizando el comando:

```bash
npm run dev
```
