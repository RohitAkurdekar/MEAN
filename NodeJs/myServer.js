/**************************************
 * @name My server
 * @date 27/oct/2022
 * @brief Create personal server
 ***************************************/

let http = require("http");
function process_req(req,resp)
{
    let str = "<h1>Hello from my_server</h1>";
    let size = str.length;

    resp.writeHead(200,{
        'content-length':size,
        'content-type':'text/html'
    });
    resp.write(str);
    resp.end();
}

let server = http.createServer(process_req);

server.listen(1337,"172.26.139.47");
console.log("Server running on http://172.26.139.47:1337");