let my_file = require("fs");

let arr_name = ["rohit","saurav","amit","digvijay"]

data = arr_name.join("|");

my_file.writeFile("myNames.txt",data,(err)=>{
    if(err)   console.log(err.message);
})