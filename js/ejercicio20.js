"use strict";

class Person {
    constructor(nombre, apellido1, apellido2, dni, fechaNa, sexo) {
        this._nombre = nombre || "";
        this._apellido1 = apellido1 || "";
        this._apellido2 = apellido2 || "";
        this._dni = dni || "";
        this._fechaNa = fechaNa || "";
        this._sexo = sexo || "";
    }
    fullName() {
        return this._nombre + " " + this._apellido1 + " " + this._apellido2;
    }
    toString() {
        return this._nombre + " " + this._apellido1 + " " + this._apellido2 + " " + this._dni + " " + this._fechaNa + " " + this._sexo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre || "";
    }
    get apellido1() {
        return this._apellido1;
    }
    set apellido1(apellido1) {
        this._apellido1 = apellido1 || "";
    }
    get apellido2() {
        return this._apellido2;
    }
    set apellido2(apellido2) {
        this._apellido2 = apellido2 || "";
    }
    get dni() {
        return this._dni;
    }
    set dni(dni) {
        this._dni = dni || "";
    }
    get fechaNa() {
        return this._fechaNa;
    }
    set fechaNa(fechaNa) {
        this._fechaNa = fechaNa || "";
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo || "";
    }
}


// Pruebas

function test() {
    var empleado = new Person("David", "G", "T", "12345678A", "1/1/1", "h");

    var resultado = document.getElementById("resultado");

    empleado.nombre = "Homer";
    console.log(empleado.nombre);

    resultado.innerHTML = "<br>" + empleado.fullName() + "<br>" + empleado.toString();

}


