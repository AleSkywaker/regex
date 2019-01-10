let expression1 = new RegExp("abc");

let expression2 = /ale/;

let expression3 = /[01azAz]/


let expression4 = /\d*/;  //el simbolo de asterisco indica que puedo no haber ningun digito,  o varios
console.log("expression4", expression4.test(""))
console.log("expression4.1", expression4.test(255555))

let expression5 = /\d+/;  //el simbolo de 'mas' indica que tiene que haber por lo menos un digito.
console.log("expression5", expression5.test(""))
console.log("expression5.1", expression5.test(255555))

let expression6 = /\d?/;  //el simbolo de 'interrogación' indica que el digito es opcional.
console.log("expression6", expression6.test(""))
console.log("expression6.1", expression6.test(255555))

let fecha = /\d\d-\d\d-\d\d\d\d/
console.log("fecha", fecha.test('22-08-1985'))


let evaluacion = /Hola mun?do/
console.log("evaluacion", evaluacion.test('Hola mudo'))

