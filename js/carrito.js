"use strict";


class Carrito {
    constructor() {
        this.listaArticulos = [];
        this.unidades = 0;
        this.precio = 0;
    }
}

var MiCarrito = new Carrito;

class Articulo {
    constructor() {
        this.nombre = "";
        this.precio = "";
    }
}

function añadir(nombre, precio) {
    var MiArticulo = new Articulo;

    MiArticulo.nombre = nombre;
    MiArticulo.precio = precio;
    MiCarrito.listaArticulos.push(MiArticulo);
    MiCarrito.unidades++;
    MiCarrito.precio = parseInt(MiCarrito.precio) + parseInt(precio);
    document.getElementById("resultado").innerHTML = "<h2>Carrito:</h2>" + "Unidades: " + MiCarrito.unidades + "<br>" + "Precio: " + MiCarrito.precio;
}

function mostrar() {
    var cadena = "<h2> Productos: </h2>";
    MiCarrito.listaArticulos.forEach(articulo => {
        cadena += "Nombre:" + articulo.nombre + "<br>" + "Precio:" + articulo.precio + "<br>";
    });
    document.getElementById("resultado").innerHTML = cadena;
}


