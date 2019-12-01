"use strict";

class Carrito {
    constructor(Id_carrito, items, cantidades) {
        this.Id_carrito = Id_carrito;
        this.items = items;
        this.cantidades = cantidades || [];
    }
    get Id_carrito() {
        return this._Id_carrito;
    }
    get items() {
        return this._items;
    }
    get cantidades() {
        return this._cantidades;
    }
    set Id_carrito(Id_carrito) {
        this._Id_carrito = Id_carrito;
    }
    set items(items) {
        this._items = items;
    }
    set cantidades(cantidades) {
        this._cantidades = cantidades;
    }
    toString() {
        return this.Id_carrito + "Items: " + this.items + "Cantidades: " + this.cantidades;
    }
}



class Producto {
    constructor(num_serie, nombre, precio, iva) {
        this.num_serie = num_serie;
        this.nombre = nombre;
        this.precio = precio || 0;
        this.iva = iva || 0;
    }
    get num_serie() {
        return this._num_serie;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get iva() {
        return this._iva;
    }
    set num_serie(num_serie) {
        this._num_serie = num_serie;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set iva(iva) {
        this._iva = iva;
    }
    toString() {
        return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva;
    }
}

class Camiseta extends Producto {
    constructor(num_serie, nombre, precio, iva, talla, color) {
        super(num_serie, nombre, precio, iva);
        this.talla = talla;
        this.color = color || "";
    }
    get talla() {
        return this._talla;
    }
    get color() {
        return this._color;
    }
    set talla(talla) {
        this._talla = talla;
    }
    set color(color) {
        this._color = color;
    }
    toString() {
        return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.talla + " " + this.color;
    }
}

class Pantalon extends Camiseta {
    constructor(num_serie, nombre, precio, iva, talla, color, ancho, largo) {
        super(num_serie, nombre, precio, iva, talla, color);
        this.ancho = ancho || 0;
        this.largo = largo || 0;
    }
    get ancho() {
        return this._ancho;
    }
    get largo() {
        return this._largo;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }
    set largo(largo) {
        this._largo = largo;
    }
    toString() {
        return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.talla + " " + this.color + " " + this.ancho + " " + this.largo;
    }
}

class Zapatilla extends Producto {
    constructor(num_serie, nombre, precio, iva, numero, tipo) {
        super(num_serie, nombre, precio, iva);
        this.numero = numero;
        this.tipo = tipo;
    }
    get numero() {
        return this._numero;
    }
    get tipo() {
        return this._tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    toString() {
        return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.numero + " " + this.tipo;
    }
}



// Pruebas

function test() {
    var id = "234565", items = [], cantidades = [0];

    if (validarCad(id, /^(1|2|3|4){1}\d{5}$/)) {
        var MiCarrito2 = new Carrito(id, items, cantidades);
        console.log(MiCarrito2);

        var resultado = document.getElementById("resultado");

        var MiProducto1 = new Producto(12345678, "Gorra", "15", 21);

        MiCarrito2.items.push(MiProducto1);
        MiCarrito2.cantidades.push(1);

        var MiProducto2 = new Camiseta(22345678, "Camiseta básica", "20", 10, "S", "Rojo");

        MiCarrito2.items.push(MiProducto2);
        MiCarrito2.cantidades.push(1);

        var MiProducto3 = new Pantalon(32345678, "Pantalon vaquero", "25", 10, "L", "Azul marino", 42, 44);

        MiCarrito2.items.push(MiProducto3);
        MiCarrito2.cantidades.push(1);

        document.getElementById("resultado").style.color = "black";
        resultado.innerHTML = "<br><h2>Carrito:</h2>" + MiCarrito2.toString() + "<br>" + MiProducto1.toString() + "<br>" + MiProducto2.toString() + "<br>" + MiProducto3.toString() + "<br>";


    }

}


var id = "134565", items = [];
var MiCarrito = new Carrito(id, items);

function añadir(numSerie, nombre, precio, cantidad) {
    if (validarCad(numSerie, /^\d{8}$/)) {
        document.getElementById("resultado").style.color = "black";
        var opt = document.getElementById("opt");
        switch (opt.value) {
            case "camiseta":
                var talla = document.getElementById("talla").value;
                if (validarCad(talla, /^(XS|S|M|L|XL|XXL|XXXL)$/)) {
                    var color = document.getElementById("color").value;
                    var MiProducto = new Camiseta(numSerie, nombre, precio, 10, talla, color);
                }
                break;
            case "pantalon":
                var talla = document.getElementById("talla").value;
                var color = document.getElementById("color").value;
                var ancho = document.getElementById("ancho").value;
                var largo = document.getElementById("largo").value;
                if (validarCad(talla, /^(XS|S|M|L|XL|XXL|XXXL)$/) && validarMedidas(ancho, 48, 32) && validarMedidas(largo, 54, 28)) {
                    var MiProducto = new Pantalon(numSerie, nombre, precio, 10, talla, color, ancho, largo);
                }
                break;
            case "zapatilla":
                var numero = document.getElementById("numero").value;
                var tipo = document.getElementById("tipo").value;
                if (validarMedidas(numero, 48, 16), validarCad(tipo, /^(EU|USA|UK|CM)$/)) {
                    var MiProducto = new Zapatilla(numSerie, nombre, precio, 4, numero, tipo);
                }
                break;
        }
        MiCarrito.cantidades.push(cantidad);
        MiCarrito.items.push(MiProducto);

        MiCarrito.cantidades[1] + MiCarrito.cantidades[2] + MiCarrito.cantidades[3];
        console.log(MiProducto);
        console.log(MiCarrito);
        var cantidadT = 0;
        cantidadT = cantidadTotal();
        document.getElementById("resultado").style.color = "black";
        document.getElementById("resultado").innerHTML = "Añadido correctamente, el carrito actualmente contiene " + cantidadT + " productos. <br>";
    }

}

function mostrar() {
    var cont = 0;
    var cadena = "<h2> Productos: </h2>";
    MiCarrito.items.forEach(producto => {
        cadena += "<input type='radio' name=articulo id=" + cont + " value=" + cont + ">" + producto.nombre + " - " + producto.precio + "€<br>";
        cont++;
    });
    document.getElementById("resultado").style.color = "black";
    document.getElementById("resultado").innerHTML = cadena;
}

function cantidadTotal() {
    var cantidadT = 0;
    MiCarrito.cantidades.forEach(cantProducto => {
        cantidadT += parseInt(cantProducto);
    });

    return cantidadT;
}

function eliminar() {

    for (let i in MiCarrito.items) {

        if (document.getElementById(i).checked) {

            MiCarrito.cantidades.splice(i, 1);

            MiCarrito.items.splice(i, 1);
        }
    }

    mostrar();
}

function precioTotal() {
    var precioTotal = 0, precioTotalIVA = 0;
    for (let i in MiCarrito.items) {
        precioTotal += MiCarrito.items[i].precio * MiCarrito.cantidades[i];
        precioTotalIVA += MiCarrito.items[i].precio * MiCarrito.cantidades[i] * (1 + parseInt(MiCarrito.items[i].iva) / 100);
    }
    document.getElementById("resultado").style.color = "black";
    document.getElementById("resultado").innerHTML = "El precio total es: " + precioTotal + "€ (sin IVA incl.)<br>El precio total con IVA es: " + precioTotalIVA + "€ (IVA incl.)<br>";
}

//Validacion
function validarCad(cadena, expresion) {
    var valido = true;
    try {
        if (!cadena.match(expresion)) {
            valido = false;
            throw "La cadena no es válida. Debe seguir el formato: " + expresion + "<br>.";
        }
    } catch (error) {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").innerHTML = error;
    } finally {
        return valido;
    }
}

function validarMedidas(numero, valorMax, valorMin) {
    var valido = true;
    try {
        if (numero > valorMax) {
            valido = false;
            throw "Debe ser menor de " + valorMax + "<br>.";
        }
        if (numero < valorMin) {
            valido = false;
            throw "Debe ser mayor de " + valorMin + "<br>.";
        }
    } catch (error) {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").innerHTML = error;
    } finally {
        return valido;
    }
}

function validarIVA(numero, valorMax) {
    var valido = true;
    try {
        if (numero > valorMax) {
            valido = false;
            throw "El IVA debe ser menor de " + valorMax + "<br>.";
        }
    } catch (error) {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").innerHTML = error;
    } finally {
        return valido;
    }
}

//Mejora, en función de la opcion seleccionada aparecerán unas opciones u otras
function select() {
    var opt = document.getElementById("opt");
    switch (opt.value) {
        case "camiseta":
            document.getElementById("tallaL").style.display = "block";
            document.getElementById("colorL").style.display = "block";
            document.getElementById("anchoL").style.display = "none";
            document.getElementById("largoL").style.display = "none";
            document.getElementById("numeroL").style.display = "none";
            document.getElementById("tipoL").style.display = "none";
            break;
        case "pantalon":
            document.getElementById("tallaL").style.display = "block";
            document.getElementById("colorL").style.display = "block";
            document.getElementById("anchoL").style.display = "block";
            document.getElementById("largoL").style.display = "block";
            document.getElementById("numeroL").style.display = "none";
            document.getElementById("tipoL").style.display = "none";
            break;
        case "zapatilla":
            document.getElementById("tallaL").style.display = "none";
            document.getElementById("colorL").style.display = "none";
            document.getElementById("anchoL").style.display = "none";
            document.getElementById("largoL").style.display = "none";
            document.getElementById("numeroL").style.display = "block";
            document.getElementById("tipoL").style.display = "block";
            break;
    }
}