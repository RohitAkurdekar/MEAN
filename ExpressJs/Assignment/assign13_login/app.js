/*
Develop a login app. The login.html must accept username and password and submit to
node. At server side, node must first check if password is minimum 6 characters. 
Create a Javascript array that contains username and password as comma separated values.
Enter 3 user details.
*/

const userDB= [{"uname":"Kavtya","password":"mahakal"},
             {"uname":"zagdya","password":"ramoshi"},
             {"uname":"taklu","password":"haivan"},
             {"uname":"tatya","password":"vinchu"}]

const ExpressJs = require("../../../../../../my_node_modules/node_modules/express");
const app =ExpressJs()

const body_parser = require("../../../../../../my_node_modules/node_modules/body-parser")
app.use(body_parser.urlencoded({extended: false}));

app.use(ExpressJs.json())

const { check, validationResult } = require("../../../../../../my_node_modules/node_modules/express-validator/src");

app.get("/",(req,resp)=>{
    resp.sendFile("login.html",{root:__dirname});
});

app.post("/validLogin",
[check("pwd").isLength({min:6})
            .withMessage("Password length should be more than 6 characters")]
,(req,resp)=>{

    let uname = req.body.uname;
    let password = req.body.pwd;
    let found = 0;

    const errors = validationResult(req);
 
    // If some error occurs, then this block of code will run

    if (!errors.isEmpty()) {
        resp.send(errors)
    }
    else   
    {
        for(user of userDB)
        {
            if(user.uname == uname)
            {
                if(user.password == password)
                {
                    found =1;
                }
                else found =2;

                break;
            }
        }
        switch(found)
        {
            case 0:{
                resp.send("User not found");
                break;
            }
            case 1:{
                resp.send("Login successfull");
                break;
            }
            case 2:{
                resp.send("Invalid password");
                break;
            }
        }
    }
});


app.listen(1337,()=>{console.log("1337")})