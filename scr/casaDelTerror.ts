import { Atraccion } from "./atraccion";

export  class CasaDelTerror extends Atraccion {
    // solo se activa de noche

    constructor(nombre: string, precioBaseEntrada: number, capacidadMaximaDePersonas: number, alturaMinima: number) {
        super(nombre, precioBaseEntrada, capacidadMaximaDePersonas);
    
    }
 
    calcularCostoOperacion(): number {
        const costoTotal = 50 * this.cantidadPersonasActuales
        return costoTotal
    }
    
}