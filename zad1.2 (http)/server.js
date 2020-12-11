const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    let u = url.parse(req.url)
    console.log(`Path: ${u.path}`);
    if(u.path == "/pogoda"){
        res.writeHead(200);
        let date = Date.now();
        console.log(date);
        res.end(JSON.stringify({date}));
    }else{
        res.writeHead(404);
        res.end(JSON.stringify("Not Found"))
    }
}).listen(8080)