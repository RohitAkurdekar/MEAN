let express = require("../../../../my_node_modules/node_modules/express")
let app = express()
let htmlFile = require("fs")

let htmlData = "";
htmlFile.readFile("admin.html",(err,data)=>{
    if(err) console.log(err.message)
    else    htmlData = data;
})
console.log("data\n",htmlData)
//-------- method(path, call-back())

// localhost:1337 <- open this in browser
app.get("/",(req, resp)=>{
    resp.send("<h1>Welcome to ExpressJs session</h1>");
})

// localhost:1337/home <- open this in browser
app.get("/home",(req,resp)=>{
    resp.send("<h1>Welcome to ExpressJs Home page</h1>");
})

app.get("/admin",(req,resp)=>{

})



// server on port 1337
app.listen(1337,()=>{
    console.log("Server on localhost:1337/")
})