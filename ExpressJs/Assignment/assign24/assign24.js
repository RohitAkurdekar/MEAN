/************************************************
 * @brief
    * html form -> accept amount, years, interest rate
    * ExpressJs -> receive numbers and displays simple interest
************************************************/

let ExpressJs = require("../../../../../../my_node_modules/node_modules/express");
let app =ExpressJs()

app.get("/",(req,resp)=>{
    resp.sendFile("simpleInt.html",{root:__dirname})
})

app.get("/si",(req,resp)=>{
    let amnt = parseInt(req.query.amnt)
    let years = parseInt(req.query.years)
    let rate = parseInt(req.query.rate)

    var si = amnt*years*rate/100;
    resp.send("Simple interest: "+String(si))
})

app.listen(1337,()=>{console.log("1337")})