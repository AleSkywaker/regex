let expression1 = new RegExp("abc");

let expression2 = /ale/;

let expression3 = /[01azAz]/

let expression4 = /\d*/;  //el simbolo de asterisco indica que puedo no haber ningun digito,  o varios

let expression5 = /\d+/;  //el simbolo de 'mas' indica que tiene que haber por lo menos un digito.

let expression6 = /\d?/;  //el simbolo de 'interrogación' indica que el digito es opcional.

let fecha = /\d\d-\d\d-\d\d\d\d/

let evaluacion = /Hola mun?do/
console.log("evaluacion", evaluacion.test('Hola mudo'))

let expression7 = 
console.log("expression7", expression7.test('27-06-2007 11:45'))



