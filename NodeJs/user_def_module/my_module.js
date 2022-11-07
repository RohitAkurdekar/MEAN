exports.ename = "Rohit Akurdekar"
exports.prn = 12345
exports.greet = ()=>
{
    console.log("Hello people")
}

exports.greetName = function()
{
    console.log("Hello",this.ename);
}


exports.person = {pname:"Vijay",page:56};