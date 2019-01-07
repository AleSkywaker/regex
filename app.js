let expression1 = new RegExp("abc");

console.log(expression1.test("Alex"));

let expression2 = /ale/;
console.log(expression2.test("alex"));

let expression3 = /[a-1 a-z A-z]/

console.log(expression3.test("$$$"))
