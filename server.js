

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.json({message: "Hello 123"})
})

var server = http.createServer(app);

server.listen(3000)

console.log('He from Nodejs')



















