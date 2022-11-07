let studentDB = [
    {sid:101, sname:"Savita", course:"DIoT"},
    {sid:102, sname:"Kavita", course:"DAC"},
    {sid:103, sname:"Anita", course:"DESD"},
    {sid:104, sname:"Sunita", course:"DIoT"},
    {sid:105, sname:"Babita", course:"DMC"},
]

const ExpressJs = require("../../../../../../my_node_modules/node_modules/express");
const app =ExpressJs()

// const mycors = require("../../../../../../my_node_modules/node_modules/cors");
// app.use(mycors);

app.get("/fetchData",(req,resp)=>{
    resp.send(studentDB);
})
app.get("/getAjax",(req,resp)=>{
    resp.sendFile("ajaxDemo.html",{root:__dirname});
})

app.get("/",(req,resp)=>{
    let stud = "<ul>"
    for(student of studentDB)  
    {
        stud += "<li><a href=\"/"+student.sname+"\">" +student.sname +"</a></li>\n" 
    }  
    stud += "</ul>"
    resp.send(stud);
})

app.get("/:name",(req,resp)=>{
    let info = ""
    for(student of studentDB)
    {
        if(req.params.name == student.sname)
        {
            info =  "<br>Student name     : " + student.sname +
                    "<br>Student id       : " + student.sid   +
                    "<br>Student course   : " + student.course;
            break;
        }
    }
    info += "<br><br><br><br><br>";
    info += "<a href = \"../\">Go back to main page</a>";

    resp.send(info);
})

app.listen(3000,()=>{console.log("1337")})