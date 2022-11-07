/**************************************
 * @name My server
 * @date 27/oct/2022
 * @brief Create personal server
 ***************************************/

let http = require("http");         // import http module
let my_file = require("fs");        // import file handling module

// 
function process_req(req,resp)
{
    let str  = "";
    // read txt file
    my_file.readFile("big_file.txt",(err,data)=>{
        if(err)    { console.log(err.message);}         // display error
        else
        {   // on successfull reading of file
            
            // Conversion of plain text to html
            str += "<!DOCTYPE html><html><body><p>";
            str += data.toString();
            str += "</p></body></html>";
            // console.log("\n",str);

            // -------- Imp for Server handling ------------------
            let size = str.length;
                // Notify browser about resp code,{ data-size, data format }
            resp.writeHead(200,{
                'content-length':size,
                'content-type':'text/html'
            });
        }
        // send data to browser
        resp.write(str);
        // terminate communication between server and browser
        resp.end();
    });
    // console.log(str);
}

// on successfull creation of server / on request recieved from browser call function
let server = http.createServer(process_req);

server.listen(1337,'192.168.76.29');        // host server on ip: port i.e {ip}:1337
console.log("Server running on http://192.168.76.29:1337");