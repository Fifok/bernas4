const fs = require("fs");
const http = require("http");
const { dirname } = require("path");
const url = require("url");

let options = {
    key: fs.readFileSync(__dirname+"/server.pem"),
    cert: fs.readFileSync(__dirname+"/server.csr")
};

const server = http.createServer(options,(req,res)=>{
    let u = url.parse(req.url)
    console.log(`Path: ${u.path}`);
    fs.readFile(__dirname+u.path,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify);
            return;
        }
        res.writeHead(200);
        res.end(data);
    })
}).listen(8080)