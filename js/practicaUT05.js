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


var id = "134565", items = [];
var MiCarrito = new Carrito(id, items);

function removeAllElements(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function addProducto() {
    var div = document.getElementById("resultado");
    removeAllElements(div);
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "numSerie");
    label.appendChild(document.createTextNode("Numero de serie: "));
    label.appendChild(input);
    div.appendChild(label);
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Nombre: "));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "nombre");
    label.appendChild(input);
    div.appendChild(label);
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Precio: "));

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "precio");
    label.appendChild(input);
    div.appendChild(label);
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Cantidad: "));

    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("size", "10");
    input.setAttribute("id", "cantidad");
    label.appendChild(input);
    div.appendChild(label);
}

function addCamiseta() {
    addProducto();
    var div = document.getElementById("resultado");
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";
    label.appendChild(document.createTextNode("Talla: "));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "talla");
    label.appendChild(input);
    div.appendChild(label);

    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Color: "));

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "color");
    label.appendChild(input);
    div.appendChild(label);

    var buttonAdd = document.createElement("button");
    buttonAdd.style.display = "block";
    buttonAdd.style.margin = ".5em";
    buttonAdd.addEventListener("click", function () { añadir(document.getElementById("numSerie").value, document.getElementById("nombre").value, document.getElementById("precio").value, document.getElementById("cantidad").value, "camiseta") });
    buttonAdd.appendChild(document.createTextNode("Añadir producto"));
    div.appendChild(buttonAdd);
}

function addPantalon() {
    addProducto();
    var div = document.getElementById("resultado");
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";
    label.appendChild(document.createTextNode("Talla: "));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "talla");
    label.appendChild(input);
    div.appendChild(label);

    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Color: "));

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "color");
    label.appendChild(input);
    div.appendChild(label);


    var div = document.getElementById("resultado");
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";
    label.appendChild(document.createTextNode("Ancho: "));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "ancho");
    label.appendChild(input);
    div.appendChild(label);

    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Largo: "));

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "largo");
    label.appendChild(input);
    div.appendChild(label);

    var buttonAdd = document.createElement("button");
    buttonAdd.style.display = "block";
    buttonAdd.style.margin = ".5em";
    buttonAdd.addEventListener("click", function () { añadir(document.getElementById("numSerie").value, document.getElementById("nombre").value, document.getElementById("precio").value, document.getElementById("cantidad").value, "pantalon") });
    buttonAdd.appendChild(document.createTextNode("Añadir producto"));
    div.appendChild(buttonAdd);
}

function addZapatilla() {
    addProducto();
    var div = document.getElementById("resultado");
    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";
    label.appendChild(document.createTextNode("Numero: "));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "numero");
    label.appendChild(input);
    div.appendChild(label);

    var label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = ".5em";

    label.appendChild(document.createTextNode("Tipo: "));

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "10");
    input.setAttribute("id", "tipo");
    label.appendChild(input);
    div.appendChild(label);

    var buttonAdd = document.createElement("button");
    buttonAdd.style.display = "block";
    buttonAdd.style.margin = ".5em";
    buttonAdd.addEventListener("click", function () { añadir(document.getElementById("numSerie").value, document.getElementById("nombre").value, document.getElementById("precio").value, document.getElementById("cantidad").value, "zapatilla") });
    buttonAdd.appendChild(document.createTextNode("Añadir producto"));
    div.appendChild(buttonAdd);

}

function añadir(numSerie, nombre, precio, cantidad, opt) {
    if (validarCad(numSerie, /^\d{8}$/)) {
        document.getElementById("resultado").style.color = "black";
        switch (opt) {
            case "camiseta":
                var talla = validarCad(document.getElementById("talla").value, /^(XS|S|M|L|XL|XXL|XXXL)$/);

                var color = document.getElementById("color").value;
                var MiProducto = new Camiseta(numSerie, nombre, precio, 10, talla, color);

                break;
            case "pantalon":
                var talla = validarCad(document.getElementById("talla").value, /^(XS|S|M|L|XL|XXL|XXXL)$/);
                var color = document.getElementById("color").value;
                var ancho = validarMedidas(document.getElementById("ancho").value, 48, 32);
                var largo = validarMedidas(document.getElementById("largo").value, 54, 28);

                var MiProducto = new Pantalon(numSerie, nombre, precio, 10, talla, color, ancho, largo);

                break;
            case "zapatilla":
                var numero = validarMedidas(document.getElementById("numero").value, 48, 16);
                var tipo = validarCad(document.getElementById("tipo").value, /^(EU|USA|UK|CM)$/);

                var MiProducto = new Zapatilla(numSerie, nombre, precio, 4, numero, tipo);
                break;
        }

        MiCarrito.cantidades.push(cantidad);
        MiCarrito.items.push(MiProducto);

        MiCarrito.cantidades[1] + MiCarrito.cantidades[2] + MiCarrito.cantidades[3];
        console.log(MiProducto);
        console.log(MiCarrito);

        actualizarCantidad();
        actualizarTotal();
        var div = document.getElementById("resultado");
        div.appendChild(document.createTextNode("Producto añadido al carrito. "));
    }

}

function cantidadTotal() {
    var cantidadT = 0;
    MiCarrito.cantidades.forEach(cantProducto => {
        cantidadT += parseInt(cantProducto);
    });

    return cantidadT;
}

function actualizarCantidad() {
    var cantidadT = cantidadTotal();
    var div = document.getElementById("resultado");
    removeAllElements(div);
    var spancantidad = document.getElementById("tcantidad");
    removeAllElements(spancantidad);
    spancantidad.appendChild(document.createTextNode(cantidadT));
}

function actualizarTotal() {
    var precioT = precioTotal();
    var div = document.getElementById("resultado");
    removeAllElements(div);
    var spantotal = document.getElementById("total");
    removeAllElements(spantotal);
    spantotal.appendChild(document.createTextNode(precioT + "€"));
}

function listar() {
    var div = document.getElementById("resultado");
    removeAllElements(div);
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Carrito: "));
    var ulist = document.createElement("ul");
    var li;
    var cont = 0;
    MiCarrito.items.forEach(producto => {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(producto.nombre + " - " + producto.precio + "€" + " - " + "Unidades: " + MiCarrito.cantidades[cont]));
        ulist.appendChild(li);
        cont++;
    });
    div.appendChild(h2);
    div.appendChild(ulist);
}

function mostrar() {
    listar();

    var div = document.getElementById("resultado");

    var precioSin = document.createElement("p");
    var precioCon = document.createElement("p");

    precioSin.appendChild(document.createTextNode("Precio total sin IVA: "+precioTotal()+"€"));
    precioCon.appendChild(document.createTextNode("Precio total con IVA: "+precioTotalIVA()+"€"));

    div.appendChild(precioSin);
    div.appendChild(precioCon);
}

function precioTotal() {
    var precioTotal = 0;
    for (let i in MiCarrito.items) {
        precioTotal += MiCarrito.items[i].precio * MiCarrito.cantidades[i];
    }
    return precioTotal;
}

function precioTotalIVA() {
    var precioTotalIVA = 0;
    for (let i in MiCarrito.items) {
        precioTotalIVA += MiCarrito.items[i].precio * MiCarrito.cantidades[i] * (1 + parseInt(MiCarrito.items[i].iva) / 100);
    }
    return precioTotalIVA;
}

function eliminarTodos() {
    var id = "134565", items = [];
    MiCarrito = new Carrito(id, items);

    actualizarCantidad();
    actualizarTotal();
    var div = document.getElementById("resultado");
    div.appendChild(document.createTextNode("Se han eliminado todos los articulos del carrito."));

}

function eliminarUltimo() {
    MiCarrito.items.splice(MiCarrito.items.length - 1, 1);
    MiCarrito.cantidades.splice(MiCarrito.cantidades.length - 1, 1);
    actualizarCantidad();
    actualizarTotal();
    var div = document.getElementById("resultado");
    div.appendChild(document.createTextNode("Se ha eliminado el último articulo del carrito."));

}

//Validacion
function BaseException() {

}

BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;
BaseException.prototype.toString = function () {
    return this.name + ": " + this.message;
}

function MiException(code) {
    this.name = "MiException";
    switch (code) {
        case 1:
            this.message = "Error: el valor introducido no es valido.";
            break;
        case 2:
            this.message = "Error: las medidas no están dentro del rango permitido.";
            break;
        default:
            this.message = "Error: error desconocido";
            break;
    }
    this.code = code;
}

MiException.prototype = new BaseException();
MiException.prototype.constructor = MiException;

function validarCad(cadena, expresion) {
    if (!expresion.test(cadena)) {
        throw new MiException(1);
    } else {
        return cadena;
    }
}

function validarMedidas(numero, valorMax, valorMin) {
    if (numero > valorMax) {
        throw new MiException(2);
    }
    else if (numero < valorMin) {
        throw new MiException(2);
    } else {
        return numero;
    }
}


