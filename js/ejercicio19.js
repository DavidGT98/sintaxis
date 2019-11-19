"use strict";

function Employee() {
    this.name = "";
    this.dept = "general";
}

function Manager() {
    Employee.call(this);
    this.reports = [];
}
Manager.prototype = new Employee;

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}
WorkerBee.prototype = new Employee;

function SalesPerson() {
    WorkerBee.call(this);
    this.quota = 100;
    this.dept = "sales";
}
SalesPerson.prototype = new WorkerBee;

function Engineer() {
    WorkerBee.call(this);
    this.machine = "";
    this.dept = "engineering";
}
Engineer.prototype = new WorkerBee;

Employee.prototype.toString = function() {
    console.log(this);
}



// Pruebas

var empleado = new Employee();

empleado.toString();

var manager = new Manager();

manager.toString();

var abeja = new WorkerBee();

abeja.toString();

var ventas = new SalesPerson();

ventas.toString();

var ingeniero = new Engineer();

ingeniero.toString();
