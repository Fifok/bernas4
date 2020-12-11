const http = require("http")
const fs = require("fs")

let options = {
    host: "localhost",
    path: "/nowa/testnowa.json",
    port: "8080",
    key: fs.readFileSync(__dirname+"/server.pem"),
    cert: fs.readFileSync(__dirname+"/server.csr"),
    agent:false
};

function handleRes(res) {
    let data = "";
    res.on("data",(chunk)=>{
        data += chunk
    });
    res.on('end',()=>{
        console.log(data);
    });
}

let req = http.request(options,(res)=>{
    handleRes(res)
}).end();

options.path = "stara/testnowa.json";
req = http.request(options,(res)=>{
    handleRes(res)
}).end()