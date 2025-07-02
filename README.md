### 🎢 DESAFÍO TÉCNICO

## 🧠 Desafio POO

Diseñar un sistema orientado a objetos para gestionar el funcionamiento interno de un parque de atracciones. Este ejercicio está pensado para que apliques **todos los pilares de la POO**

## 🎯 Requisitos del sistema

### Clases base y estructura

1. Crear una clase **abstracta** `Atraccion` que represente el comportamiento general de una atracción del parque.
2. Cada atracción tendrá al menos los siguientes atributos (con el nivel de acceso correcto, publico, privado, estático, protegido):
- `nombre` (string)
- `precioBaseEntrada` (number)
- `capacidadMaximaDePersonas` (number)
- `cantidadPersonasActuales` (number) → cantidad de personas que actualmente se encuentren en la atracción.
- `estado` (activa o inactiva)
1. Esta clase deberá tener métodos:
- `activar()` y `desactivar()`
- `ingresarPersonas(cantidad: number)`
- `calcularCostoOperacion(): number` → **abstracto**
- `mostrarInformacion(): void` → imprime el estado de la atracción
    
    
    ⚠ **Puedes incluir atributos o métodos (siempre cumpliendo con esta base) según consideres para tus reglas de negocio, recuerda que el ejercicio es una propuesta base, modela tu propio parque de atracciones!**
    

### Clases derivadas obligatorias (mínimo 3)

Cada clase debe sobrescribir `calcularCostoOperacion()` y tener un comportamiento o atributo distintivo:

- `MontanaRusa`→ alto costo operativo, mínimo de altura
- `CasaDelTerror` → solo se activa de noche
- `Carrusel` → bajo costo, uso continuo, puede estar en mantenimiento

### Otras reglas

✅ Usar `protected` en atributos como `cantidadPersonasActuales` 

✅ Implementar un `getter` o `setter` para validar la capacidad al ingresar personas.

✅ Crear una clase `Parque` que contenga una colección (array) de `Atracciones[]` y permita:

- Agregar nuevas atracciones
- Listarlas
- Calcular costo total del parque
- Activar/desactivar atracciones

## 🖥️ Requisitos de la consola

El sistema debe ofrecer un menú interactivo por consola (con `readline-sync` o similar):

```tsx
Bienvenido al sistema del Parque de Atracciones 🎡

1. Agregar nueva atracción
2. Ver estado de todas las atracciones
3. Ingresar personas a una atracción
4. Activar/Desactivar atracción
5. Calcular costo total de operación
6. Salir
```

## 🚨 Restricciones

- No se puede usar ningún `console.log` de atributos directamente → todo debe pasar por métodos o getters.
- No se permite acceder ni modificar estados sin encapsulamiento.
- El código debe ser limpio, modular y escalable.

## 📦 Puesta en escena

- Arma tu repositorio en GitHub.
- Un README con tu enfoque y decisiones
- Screenshots o grabación opcional mostrando el menú en funcionamiento