let expression1 = new RegExp("abc");

console.log("expression1", expression1.test("Alex"));

let expression2 = /ale/;
console.log("expression2", expression2.test("alex"));

let expression3 = /[01azAz]/

console.log("expression3", expression3.test("€€€"))

let expression4 = /\d*/;  //el simbolo de asterisco indica que puedo no haber ningun digito,  o varios
console.log("expression4", expression4.test(""))
console.log("expression4.1", expression4.test(255555))

let expression5 = /\d+/;  //el simbolo de 'mas' indica que tiene que haber por lo menos un digito.
console.log("expression5", expression5.test(""))
console.log("expression5.1", expression5.test(255555))

let fecha = /\d\d-\d\d-\d\d\d\d/
console.log("fecha", fecha.test('22-08-1975'))


