
let ExpressJs = require("../../../../../../my_node_modules/node_modules/express");
let app =ExpressJs()


app.get("/",(req,resp)=>{
    resp.sendFile("stringArr.html",{root:__dirname});
})

app.get("/mklist",(req,resp)=>{
    let s1 = req.query.name1;
    let s2 = req.query.name2;
    let s3 = req.query.name3;

    let str = "<ul>"
    str += "<li>"+s1+"</li>";
    str += "<li>"+s2+"</li>";
    str += "<li>"+s3+"</li>";
    str += "</ul>"

    resp.send(str);
})

app.listen(1337,()=>{console.log("1337")})