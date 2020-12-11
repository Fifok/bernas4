const net = require("net");

const client = net.connect(8080,"localhost",()=>{
    console.log("Nawiazano polaczenie z serverem");
    client.write("Wiadomosc od klienta");
    client.setEncoding("utf-8")
    client.on("data",(data)=>{
        console.log(data);
        client.end()
    });
    client.on("end",()=>{
        console.log("Klient rozlaczony");
    });
});