const net = require("net");
const fs = require("fs");

const server = net.createServer((socket)=>{
    console.log("Nawiazano polaczanie");
    socket.on("data",(data)=>{
        console.log(`Od klienta: ${data}`);
    });
    socket.on("end",()=>{
        console.log("Koniec polaczenia")
    });
    fs.readFile("test.json",(err,data)=>{
        socket.write(data);
    });
})

server.listen(8080,()=>{
    console.log("Server start");
})