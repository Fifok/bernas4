const http = require('http')

const options = {
    host: 'localhost',
    path: '/pogoda',
    port: 8080
}

function handleResponse(res){
    let date = "";
    res.on('data', function (chunk){
        date += chunk;
    });
    res.on('end', function () {
        console.log(new Date(JSON.parse(date).date));
    });
}

function throwReq() {
    let req = http.request(options,(res)=>{
        handleResponse(res);
    }).end();
}

setInterval(throwReq,1000);