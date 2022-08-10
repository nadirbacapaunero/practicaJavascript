/*
ejemplos de tipos de datos
*/

// tipo de datos string

var nombre = "Nadir";
console.log(nombre);
nombre =10;
console.log(typeof nombre)

var numero =12.5;
// tipo de dato numerico
console.log(numero);
// tipo de dato object

var objecto ={
    nombre: "Juan",
    apellido: "Perez",
    telefono : "494949"
};

console.log(objecto)

// tipo de dato boolean

var bandera = true;
console.log(bandera);

console.log(typeof(bandera))

// tipo de dato function

function miFuncion(){

}

console.log(miFuncion);

// tipo de dato simbol


var simbolo= Symbol("mi simbolo");

console.log(typeof(simbolo));

// tipo de clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre="nombre";
        this.apellido ="apellido";
    };
}
console.log(Persona);

console.log(typeof(Persona));

// tipo undefined

var x;
console.log(x);

// null= ausencia de valor

var y = null;

console.log(y);
console.log(typeof(y))

// un arreglo
var autos =[
    'BWM','AUDI','VOLVO'
];
console.log(autos);

console.log(typeof(autos));

var z="";

console.log(z);
console.log(typeof z);

var nombre ="juan";
var apellido ="Perez";

var nombreCompleto= nombre + " " + apellido;

console.log(nombreCompleto)

var  x = nombre  + 200;

console.log(x);
















