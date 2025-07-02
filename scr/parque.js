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
var _Parque_atracciones;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parque = void 0;
class Parque {
    constructor() {
        _Parque_atracciones.set(this, void 0);
        __classPrivateFieldSet(this, _Parque_atracciones, [], "f");
    }
    set atracciones(atraccion) {
        __classPrivateFieldGet(this, _Parque_atracciones, "f").push(atraccion);
    }
    get atracciones() {
        return ([...__classPrivateFieldGet(this, _Parque_atracciones, "f")]);
    }
}
exports.Parque = Parque;
_Parque_atracciones = new WeakMap();
