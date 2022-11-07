let express = require("../../../../../my_node_modules/node_modules/express")
let app = express()

app.get("/welcome",(req,resp)=>{
    resp.sendFile("welcome.html",{root:__dirname})
})

app.listen(1337,()=>console.log("Server on 1337"))