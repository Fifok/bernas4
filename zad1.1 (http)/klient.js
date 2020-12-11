const http = require("http")

let req = null;

let options = {
    host: "localhost",
    path: "/nowa/testnowa.json",
    port: "3000"
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
console.log(options);
req = http.request(options,(res)=>{
    handleRes(res)
}).end();


options.path = "stara/teststara.json";
console.log(options);
req = http.request(options,(res)=>{
    handleRes(res)
}).end();
