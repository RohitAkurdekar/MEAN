let util = require("util");

console.log(util.format("My name is %s and I am %d year old","Rohit",26))

console.log(util.isArray([]))                   // true
console.log(util.isArray(new Array()))          // true
console.log(util.isArray(Array()))              // true

console.log(util.isDate(new Date()))            // true
console.log(util.isDate(Date()))                // false


/* ------------------- OUTPUT ---------------------------------
 My name is Rohit and I am 26 year old

 */