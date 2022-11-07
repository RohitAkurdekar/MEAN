let file = require("fs")
file.readFile("emp.txt",(err,data)=>{
    if(err)     console.log(err);
    else
    {
        sum =0;
        empDb = data.toString().split("\n");
        for (emp of empDb)
        {
            info = emp.split(":");
            sum += parseInt(info[3]);
        }

        console.log("\nsum of salary = Rs",sum,"/-\n");
    }
})