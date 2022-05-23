const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const server = http.createServer((req,res) => {
    res.sendFile = (file,status,headers) => {
        fs.readFile(file,'utf-8',(err,content) => {
            if (err) {
                console.log('Error',err);
                res.statusCode = 400;
                res.end(`<h1>Error</h1>`);
            } else {
                res.writeHead(status,headers);
                res.end(content);
            }
            console.log(req.method,req.url);
        });
    }
    
    req.request = (path,method='GET') => {
        return req.url === path && req.method === method;
    }
    
    if (req.request('/')) {
        res.sendFile('HTML/index.html',200,{'Content-type':'text/html'});
    } else if (req.request('/style.css')) {
        res.sendFile('CSS/style.css',200,{'Content-type':'text/css'});
    } else if (req.request('/script.js')) {
        res.sendFile('JS/script.js',200,{'Content-type':'application/javascript'});
    } else {
        res.statusCode = 400;
        res.end(`Can not ${req.method} ${req.url}`);
    }
})

server.listen(port,() => {
    console.log(`Listen to port ${port}`);
});
