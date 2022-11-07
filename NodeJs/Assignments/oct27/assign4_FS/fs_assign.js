let myfile = require("fs");

myfile.appendFile("number.txt","1\n",(err)=>{
    if(err) console.log(err.message);
});
myfile.appendFile("number.txt","2\n",(err)=>{
    if(err) console.log(err.message);
});
myfile.appendFile("number.txt","3\n",(err)=>{
    if(err) console.log(err.message);
});
myfile.appendFile("number.txt","4\n",(err)=>{
    if(err) console.log(err.message);
});
myfile.appendFile("number.txt","5\n",(err)=>{
    if(err) console.log(err.message);
});


console.log(myfile.readFile("number.txt",(err,data)=>{
    if(err)     console.log(err.message);
    else
    {
        let arr = data.toString().splitAt('\n');
        let sum =0;
        for( i of arr)
        {
            sum += i;
        }
        console.log(i);
    }
}))

