"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Atraccion_nombre, _Atraccion_precioBaseEntrada, _Atraccion_capacidadMaximaDePersonas, _Atraccion_estado;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atraccion = void 0;
class Atraccion {
    constructor(nombre, precioBaseEntrada, capacidadMaximaDePersonas) {
        _Atraccion_nombre.set(this, void 0);
        _Atraccion_precioBaseEntrada.set(this, void 0);
        _Atraccion_capacidadMaximaDePersonas.set(this, void 0);
        _Atraccion_estado.set(this, void 0);
        __classPrivateFieldSet(this, _Atraccion_nombre, nombre, "f");
        __classPrivateFieldSet(this, _Atraccion_precioBaseEntrada, precioBaseEntrada, "f");
        __classPrivateFieldSet(this, _Atraccion_capacidadMaximaDePersonas, capacidadMaximaDePersonas, "f");
        this.cantidadPersonasActuales = 0;
        __classPrivateFieldSet(this, _Atraccion_estado, true, "f");
    }
    //getter//
    get getNombre() {
        return __classPrivateFieldGet(this, _Atraccion_nombre, "f");
    }
    get getPrecioBaseEntradas() {
        return __classPrivateFieldGet(this, _Atraccion_precioBaseEntrada, "f");
    }
    get getCapacidadMaxima() {
        return __classPrivateFieldGet(this, _Atraccion_capacidadMaximaDePersonas, "f");
    }
    get getCantidadPersonas() {
        return this.cantidadPersonasActuales;
    }
    get getMostrarInformacion() {
        return __classPrivateFieldGet(this, _Atraccion_estado, "f");
    }
    //setter//
    set ingresarPersonas(cantidad) {
        if (this.cantidadPersonasActuales + cantidad <= __classPrivateFieldGet(this, _Atraccion_capacidadMaximaDePersonas, "f")) {
            this.cantidadPersonasActuales += cantidad;
        }
    }
    set salirPersonas(cantidad) {
        if (this.cantidadPersonasActuales - cantidad >= 0) {
            this.cantidadPersonasActuales -= cantidad;
        }
    }
    set activar(_value) {
        __classPrivateFieldSet(this, _Atraccion_estado, true, "f");
    }
    set desactivar(_value) {
        __classPrivateFieldSet(this, _Atraccion_estado, false, "f");
    }
}
exports.Atraccion = Atraccion;
_Atraccion_nombre = new WeakMap(), _Atraccion_precioBaseEntrada = new WeakMap(), _Atraccion_capacidadMaximaDePersonas = new WeakMap(), _Atraccion_estado = new WeakMap();
