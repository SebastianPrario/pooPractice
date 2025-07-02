import { Atraccion } from "./atraccion";

export  class MontanaRusa extends Atraccion {
    #alturaMinima: number;

    constructor(nombre: string, precioBaseEntrada: number, capacidadMaximaDePersonas: number, alturaMinima: number) {
        super(nombre, precioBaseEntrada, capacidadMaximaDePersonas);
        this.#alturaMinima = alturaMinima;
    }
    set setAlturaMinima (altura : number) {
        this.#alturaMinima = altura
    } 
    get getAlturaMinima () : number {
        return this.#alturaMinima
    }
    calcularCostoOperacion(): number {
        const costoTotal = 500 * this.cantidadPersonasActuales
        return costoTotal
    }
    
}