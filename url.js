const url = require("url")
const qs = require("querystring")

let sites = ["https://ath.bielsko.pl","http://www.example.org/foo.html#bar","https://www.youtube.com/watch?v=dQw4w9WgXcQ"];

for (let i = 0, n = sites.length; i < n; i++) {
    let site =  url.parse(sites[i])
    console.log(`Host: ${site.host}, Path: ${site.path} Hash: ${site.hash} Query Params: ${site.query}`);
}