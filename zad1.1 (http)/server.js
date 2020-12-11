const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    let u = url.parse(req.url)
    console.log(`Path: ${u.path}`);
    let filepath = __dirname+u.path;
    console.log(filepath);
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify("Not Found"));
            return;
        }
        res.writeHead(200);
        res.end(data);
    })
}).listen(3000)