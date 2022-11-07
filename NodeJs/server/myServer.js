/**************************************
 * @name My server
 * @date 27/oct/2022
 * @brief Create personal server
 ***************************************/

let http = require("http");
function process_req(req,resp)
{
    let date = new Date();
    let str = "<html><body bgcolor='lightgreen'>"
    str += "<h1>Hello from my_server</h1>";
    str += "<h3>Today is"+date.toString()+"</h3>";
    str += "</body></html>"
    let size = str.length;

    resp.writeHead(200,{
        'content-length':size,
        'content-type':'text/html'
    });
    resp.write(str);
    resp.end();
}

let server = http.createServer(process_req);

server.listen(1337,"192.168.76.29");
console.log("Server running on http://192.168.76.29:1337");