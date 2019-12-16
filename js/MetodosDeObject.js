/* Metodo constructor vs Object.create() */

function Vehiculo(matricula, consumo) {
    this.matricula = matricula;
    /* this.consumo = 0; atributo publico */
    var consumo = consumo || 0; // atributo privado

    this.gasto = function () {
        return consumo * 1.3;
    }
}

var miVehiculo1 = new Vehiculo("0357FGB", 7); /* Creando un objeto Vehiculo a través de un metodo constructor */

console.log(miVehiculo1);

var miVehiculo2 = Object.create(miVehiculo1); /* Creando un objeto con Object.create() para ello primero deberemos haber creado un objeto */

console.log(miVehiculo2);

/* La diferencia entre ambos es que para uno solo necesitamos un método constructor (function),
y para el otro debemos tener creado un objeto que será el que pasemos por parametro  al metodo
Object.create(), el objeto que le pasemos a object create puede haber sido creado con un
constructor o directamente sin metodo constructor. */



/* Object.freeze */
/* Según la documentación de Mozilla
El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas
propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que
dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan
ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve
el objeto recibido.
*/
miVehiculo1.color = "rojo";
miVehiculo2.color = "rojo";

Object.freeze(miVehiculo1); // Se congela solo uno de los objetos

miVehiculo1.combustible = "gasolina";

console.log(miVehiculo1);

miVehiculo2.combustible = "diesel";

console.log(miVehiculo2);

/* Como se puede observar en el ejemplo anterior, solo el objeto que no ha sido congelado 
tiene el atributo "color", otra forma de comprobarlo sería añadiendo un atributo al prototipo
de los objetos, esto puede ser útil cuando queramos que las propiedades uno o varios objetos
no sean alteradas. */



/* Object.seal */

Object.seal(miVehiculo2);

miVehiculo2.color = "azul";

console.log(miVehiculo2.color);

miVehiculo1.color = "negro";

console.log(miVehiculo1.color);

/* Object.seal hace lo mismo que Object.freeze pero en este caso si podemos modificar los valores
de propiedades ya existentes, como vemos en el caso de miVehiculo2 la propiedad color fue añadida 
con el valor "rojo" y despues de aplicarle el Object.seal() nos permite cambiar su valor a "azul",
a diferencia del objeto miVehiculo1 que al estar congelado no permite que se cambie el valor de ninguna
propiedad. */
