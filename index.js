const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const server = http.createServer((req,res) => {
    if (request(req,'/','GET')) {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.readFile('HTML/index.html',(err,content) => {
            if (err) return res.end(`<h1>Error</h1>`);
            console.log(req.method,req.url);
            res.end(content);
        });
    }
    if (request(req,'/backend.png','GET')) {
        res.writeHead(200,{'Content-type':'image/png'});
        fs.readFile('IMAGES/backend.png',(err,content) => {
            if (err) return res.end(`<h1>Error</h1>`);
            console.log(req.method,req.url);
            res.end(content);
        });
    }
    if (request(req,'/script.js','GET')) {
        res.writeHead(200,{'Content-type':'application/javascript'});
        fs.readFile('JS/script.js',(err,content) => {
            if (err) return res.end(`<h1>Error</h1>`);
            console.log(req.method,req.url);
            res.end(content);
        });
    }
    if (request(req,'/style.css','GET')) {
        res.writeHead(200,{'Content-type':'text/css'});
        fs.readFile('CSS/style.css',(err,content) => {
            if (err) return res.end(`<h1>Error</h1>`);
            console.log(req.method,req.url);
            res.end(content);
        });
    }
});

function request(req,url,method) {
    return req.url === url && req.method === method;
}

server.listen(port,() => {
    console.log(`Listen to port ${port}`);
});
