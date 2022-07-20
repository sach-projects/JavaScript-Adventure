var calculate = require('./module')
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Welcome Back Alien!!");
    res.end(`6 + 4 = ${calculate.add(6,4)}`);
}).listen(8010)
