const http = require("http");
const https = require("https");
const express = require("express");
const fs = require("fs");

const app = express();

let options = {
    host:"localhost",
    key: fs.readFileSync(__dirname+"/key.pem",'utf-8'),
    cert: fs.readFileSync(__dirname+"/server.crt",'utf-8')
}

const serverHttp = http.createServer(app).listen(8080);
const serverHttps = https.createServer(options,app).listen(443);

app.get("/nowa",(req,res)=>{
    fs.readFile(`${__dirname}/nowa/testnowa.json`,(err,data)=>{
        res.send(data.toString("utf-8"));
    });
});

app.get("/stara",(req,res)=>{
    fs.readFile(`${__dirname}/stara/testnowa.json`,(err,data)=>{
        res.send(data.toString("utf-8"));
    });
});

app.get(/^\/dodaj\/(\w+):(\w+)?$/,(req, res)=>{
    res.writeHead(200);
    res.end(`${req.params[0]}+${req.params[1]}=${parseInt(req.params[0])+parseInt(req.params[1])}`);
});

app.get("/user/:userid",(req, res)=>{
    res.writeHead(200);
    res.end(`Przeslano ${req.params.userid}`)
})