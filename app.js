var path = require('path');
var fs = require("fs");
var http = require("http");

const server = http.createServer(function(req, res){
    console.log('Request was made to:' + req.url);
    
    if (req.url === '/home.html' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }
    else if(req.url === '/about.html'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    }
    else if(req.url === '/contact.html'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }
    // else if(req.url === '/style.css'){
    //     res.writeHead(200,{'Content-type': 'text/html' });
    //     fs.createReadStream(__dirname + '/style.css').pipe(res)
    // }
    else{
        res.writeHead(404, {'content-type':'text/plain'})
        res.end('ERROR 404 not found');
    }

}
     
)
server.listen(4000, '127.0.0.1');
console.log('server start')
