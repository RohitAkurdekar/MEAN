let my_arith = require("./arith_func")

let num1=15;
let num2=5;
let num3= 10;
console.log("addition=",my_arith.add(num1,num2));
console.log("subtraction=",my_arith.sub(num1,num2));
console.log("multiplication=",my_arith.mul(num1,num2));
console.log("division=",my_arith.div(num1,num2));
console.log("min=",my_arith.min(num1,num2,num3));
console.log("max=",my_arith.max(num1,num2,num3));