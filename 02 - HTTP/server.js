// CRIANDO O PRIMEIRO SERVIDOR HTTP COM NODE.JS

let http = require('http')

http.createServer(function(req, res) {
    res.end("<h1>Bem vindo ao Jarvis</h1>")
}).listen(3000)

console.log("Server running on port 3000")