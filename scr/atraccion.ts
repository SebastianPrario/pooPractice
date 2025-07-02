export abstract  class Atraccion {
    #nombre: string;
    #precioBaseEntrada: number;
    #capacidadMaximaDePersonas: number;
    protected cantidadPersonasActuales: number;
    #estado: boolean;

    constructor(nombre: string, precioBaseEntrada: number, capacidadMaximaDePersonas: number) {
     this.#nombre = nombre;
     this.#precioBaseEntrada = precioBaseEntrada;
     this.#capacidadMaximaDePersonas = capacidadMaximaDePersonas;
     this.cantidadPersonasActuales = 0;
     this.#estado = true;
    }
    //getter//
    get getNombre(): string { 
        return this.#nombre
    }
    get getPrecioBaseEntradas(): number {
        return this.#precioBaseEntrada
    }
    get getCapacidadMaxima(): number {
        return this.#capacidadMaximaDePersonas
    }
  
    get getCantidadPersonas(): number {
        return this.cantidadPersonasActuales;
    } 
    get getMostrarInformacion(): boolean {
        return this.#estado;
    }
    //setter//
    set ingresarPersonas(cantidad: number) {
        if (this.cantidadPersonasActuales + cantidad <= this.#capacidadMaximaDePersonas){
            this.cantidadPersonasActuales += cantidad;
        }
    }
    set salirPersonas(cantidad: number) {
        if (this.cantidadPersonasActuales - cantidad >= 0) {
            this.cantidadPersonasActuales -= cantidad;
        }
    }  
    set activar(_value: boolean) {
        this.#estado = true;
    }
    set desactivar(_value: boolean) { 
        this.#estado = false;
    }

   abstract calcularCostoOperacion():number
    
}