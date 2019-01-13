let expression1 = new RegExp("abc");

let expression2 = /ale/;

let expression3 = /[01azAz]/

let expression4 = /\d*/;  //el simbolo de asterisco indica que puedo no haber ningun digito,  o varios

let expression5 = /\d+/;  //el simbolo de 'mas' indica que tiene que haber por lo menos un digito.

let expression6 = /\d?/;  //el simbolo de 'interrogación' indica que el digito o caracter es opcional.

let fecha = /\d\d-\d\d-\d\d\d\d/

let evaluacion = /Hola mun?do/i
console.log("evaluacion", evaluacion.test('hola mudo'))

let expression7 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/
// console.log("expression7", expression7.test('27-06-2007 11:45'))

let expression8 = /Woo+(hoo+)+/i
// console.log("expression8", expression8.test('Wooohooohohoooooooo'))

let expression9 = /\d+/
console.log(expression9.exec('Del año 1984'))  //exec

expression9.exec('Del año 1984 33').map(d=>{
    console.log("output==>", d)
})  //exec

console.log("Hasta 1998".match(/\d+/)) //match

//Limites palabras
//Con \b delimitamos el tamaño de una palabra
express10 = /\bcat\b/

console.log(express10.test("categoria")) //no se cumple
console.log(express10.test("cat")) // se cumple

express11 = /\w/

// console.log(express11.test("hola Alex"))

express12 = /pollo|pizza|pescado/
console.log(express12)
console.log(express12.test("El cliente pidio pollo"))



