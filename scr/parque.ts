import { Atraccion } from "./atraccion";

export class Parque   {
    #atracciones: Atraccion[] ;
    constructor() {
        this.#atracciones = []; 
    }
    set atracciones( atraccion: Atraccion) {
        this.#atracciones.push(atraccion);
    }
    get atracciones(): Atraccion[] |[] {
        return ([...this.#atracciones])
    }
    // calcularCostoOperacion(): number {
    //     let costoTotal = 0;
    //     for (const atraccion of this.#atracciones) {
    //         costoTotal += atraccion.calcularCostoOperacion();
    //     }
    //     return costoTotal;

    // }
}