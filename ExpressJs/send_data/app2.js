let express = require("../../../../../my_node_modules/node_modules/express")
let app = express()

app.get("/user",(req,resp)=>{
    resp.send("Rohit");
})

app.get("/users",(req,resp)=>{
    let users = [{"name":"rohit","prn":"9865655"},
                 {"name":"amit","prn":"35451"},
                 {"name":"vish","prn":"9855"},
                 {"name":"rohan","prn":"91658435"}
]
    resp.send(users);
})

app.get("/userInfo",(req,resp)=>{
    let info = {"name":"rohit","prn":"9865655"}
    resp.send(info);
})
app.get("/names",(req,resp)=>{
    let names = ["Mogambo","Kavtya mahakal","Zagdya ramoshi","taklu haiwan","tatya vinchu"]

    resp.send(names);
})

app.listen(1337,()=> console.log("Server on localhost:1337"))