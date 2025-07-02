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
var _MontanaRusa_alturaMinima;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MontanaRusa = void 0;
const atraccion_1 = require("./atraccion");
class MontanaRusa extends atraccion_1.Atraccion {
    constructor(nombre, precioBaseEntrada, capacidadMaximaDePersonas, alturaMinima) {
        super(nombre, precioBaseEntrada, capacidadMaximaDePersonas);
        _MontanaRusa_alturaMinima.set(this, void 0);
        __classPrivateFieldSet(this, _MontanaRusa_alturaMinima, alturaMinima, "f");
    }
    set setAlturaMinima(altura) {
        __classPrivateFieldSet(this, _MontanaRusa_alturaMinima, altura, "f");
    }
    get getAlturaMinima() {
        return __classPrivateFieldGet(this, _MontanaRusa_alturaMinima, "f");
    }
    calcularCostoOperacion() {
        const costoTotal = 0;
        return costoTotal;
    }
}
exports.MontanaRusa = MontanaRusa;
_MontanaRusa_alturaMinima = new WeakMap();
