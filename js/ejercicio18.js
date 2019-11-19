"use strict";

function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
    console.log(this);
}

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call (this, nombre, edad, genero);
    this.curso = curso || "";
    this.grupo = grupo || "";
}

Estudiante.prototype = new Persona;

Estudiante.prototype.registrar = function(curso, grupo) {
    this.curso = curso;
    this.grupo = grupo;
}

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call (this, nombre, edad, genero);
    this.asignatura = asignatura || "";
    this.nivel = nivel || "";
}

Profesor.prototype = new Persona;

Profesor.prototype.asignar = function(asignatura, nivel) {
    this.asignatura = asignatura;
    this.nivel = nivel;
}


// Pruebas

var persiana = new Persona("David", 21, "H");

persiana.obtDetalles();

var estudiante = new Estudiante("David", 21, "H");

estudiante.registrar(2,4);

estudiante.obtDetalles();

var profesor = new Profesor("David", 21, "H");

profesor.asignar("Programacion", 2);

profesor.obtDetalles();