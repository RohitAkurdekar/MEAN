/****************************************
 * @name user defined modules
 * @date 27/oct/2022
 * @brief
 * @abbrevations 
 * UD-> User defined
 **************************************/

let my_mod = require("./my_module");            // Import UD module
let class_mod = require("./class_module");


// accessing data from module
console.log(my_mod.ename);
console.log(my_mod.prn);

my_mod.greet();                     // call function from module
my_mod.greetName();                     // call function from module

console.log(my_mod.person.pname,my_mod.person.page);


let empObj = new class_mod();
empObj.display();