let expression1 = new RegExp("abc");

console.log("expression1", expression1.test("Alex"));

let expression2 = /ale/;
console.log("expression2", expression2.test("alex"));

let expression3 = /[01azAz]/

console.log("expression3", expression3.test("€€€"))

let expression4 = /\d/;
console.log("expression4", expression4.test("€€€"))


