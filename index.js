"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const parque_1 = require("./scr/parque");
const montanaRusa_1 = require("./scr/montanaRusa");
let salir = false;
const parque = new parque_1.Parque();
while (!salir) {
    console.clear();
    console.log('\nBienvenido al sistema del Parque de Atracciones');
    console.log('-----------------------------------------------');
    console.log('1. Agregar nueva atracción');
    console.log('2. Ver estado de todas las atracciones');
    console.log('3. Ingresar personas a una atracción');
    console.log('4. Activar/Desactivar atracción');
    console.log('5. Calcular el costo total de operaciones');
    console.log('6. Salir del sistema');
    const opcion = readlineSync.question('Elige una opcion: ');
    let numero = null;
    switch (opcion) {
        case '1':
            console.clear();
            console.log('Agregar nueva atracción');
            const nombre = readlineSync.question('Ingrese el nombre de la atraccion: ');
            console.log('1. Montana Rusa');
            console.log('2. Casa del Terror');
            console.log('3. Carrusel');
            console.log('4. Otros');
            const tipo = Number(readlineSync.question('Ingrese el tipo de atraccion'));
            const precioBaseEntrada = parseFloat(readlineSync.question('Ingrese el precio base de entrada: '));
            const capacidadMaximaDePersonas = parseInt(readlineSync.question('Ingrese la capacidad máxima de personas: '));
            let nuevaAtraccion = null;
            if (tipo === 1) {
                const alturaMinima = parseInt(readlineSync.question('Ingrese la altura minima (cm): '));
                nuevaAtraccion = new montanaRusa_1.MontanaRusa(nombre, precioBaseEntrada, capacidadMaximaDePersonas, alturaMinima);
                console.log(nuevaAtraccion);
                parque.atracciones = nuevaAtraccion;
                console.log('¡Atracción agregada!');
            }
            break;
        case '2':
            console.clear();
            console.log('Estado de las atracciones:');
            console.log('----------------------------');
            parque.atracciones.forEach((atraccion, i) => {
                console.log(` 
                Nombre: ${atraccion.getNombre} - 
                Precio: ${atraccion.getPrecioBaseEntradas} - 
                Capacidad Maxima: ${atraccion.getCapacidadMaxima}  -
                Cantidad de Personas en la atraccion: ${atraccion.getCantidadPersonas} -
                Altura minima: ${'getAlturaMinima' in atraccion ? atraccion.getAlturaMinima : ''}
                Estado: ${atraccion.getMostrarInformacion ? 'activa' : 'desactivada'}
                ----------------------------------------------------------`);
            });
            readlineSync.question('toque una tecla para continuar');
            break;
        case '3':
            console.clear();
            parque.atracciones.forEach((atraccion, i) => {
                console.log(`${i + 1}. ${atraccion.getNombre}`);
            });
            numero = Number(readlineSync.question('Ingrese el numero de la atracción a la que desea ingresar personas: '));
            if (numero < 1 || numero - 1 > parque.atracciones.length) {
                console.log('Atraccion no encontrada');
                numero = null;
                readlineSync.question('toque una tecla para continuar');
                break;
            }
            const cantidad = parseInt(readlineSync.question('Ingrese la cantidad de personas a ingresar: '));
            const cantidadPersonas = parque.atracciones[numero - 1].getCantidadPersonas;
            const cantidadMaximaDePersonas = parque.atracciones[numero - 1].getCapacidadMaxima - cantidadPersonas;
            if (cantidad > cantidadMaximaDePersonas) {
                console.log(`No se puede ingresar esa cantidad de personas. Capacidad máxima excedida.`);
                readlineSync.question('toque una tecla para continuar');
            }
            else {
                parque.atracciones[numero - 1].ingresarPersonas = cantidad;
                console.log(`se agregaron ${cantidad} personas a la atraccion: ${parque.atracciones[numero - 1].getNombre}`);
                readlineSync.question('toque una tecla para continuar');
            }
            ;
            break;
        case '4':
            console.clear();
            parque.atracciones.forEach((atraccion, i) => {
                console.log(`${i + 1}. ${atraccion.getNombre}`);
            });
            numero = Number(readlineSync.question('Ingrese el numero de la atraccion que desea activar/desactivar '));
            if (numero < 1 || numero > parque.atracciones.length) {
                console.log('Atraccion no encontrada');
                numero = null;
                readlineSync.question('toque una tecla para continuar');
                break;
            }
            const option = Number(readlineSync.question('Ingresa 1 para Activar 2 Desactivar'));
            if (option === 1) {
                parque.atracciones[numero - 1].activar = true;
                readlineSync.question('atraccion activada');
                break;
            }
            else if (option === 2) {
                parque.atracciones[numero - 1].desactivar = false;
                readlineSync.question('atraccion desactiva');
                break;
            }
            readlineSync.question('toque una tecla para continuar');
            break;
        case '6':
            salir = true;
            break;
        default:
            console.log('Opción no válida');
    }
}
