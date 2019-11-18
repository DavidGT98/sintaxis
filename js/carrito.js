"use strict";


class Carrito {
    constructor() {
        this.unidades = 0;
        this.precio = 0;
    }
}

var MiCarrito = new Carrito;

function Añadir(precio) {
    MiCarrito.unidades++;
    MiCarrito.precio = parseInt(MiCarrito.precio) + parseInt(precio);
    document.getElementById("resultado").innerHTML = "Unidades: " + MiCarrito.unidades + "<br>" +  "Precio: " +  MiCarrito.precio;
}




