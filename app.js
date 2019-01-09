let expression1 = new RegExp("abc");

console.log("expression1", expression1.test("Alex"));

let expression2 = /ale/;
console.log("expression2", expression2.test("alex"));

let expression3 = /[01azAz]/

console.log("expression3", expression3.test("€€€"))

let expression4 = /\d*/;
console.log("expression4", expression4.test(""))
console.log("expression4", expression4.test(2))

let fecha = /\d\d-\d\d-\d\d\d\d/
console.log("fecha", fecha.test('22-08-1975'))


