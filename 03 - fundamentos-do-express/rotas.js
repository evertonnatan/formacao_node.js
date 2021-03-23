const express = require('express') // IMPORTANDO O EXPRESS
const app = express() // INICIANDO O EXPRESS

app.get("/", function(req, res) {
    res.send("Bem vindo à página home")
})

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao meu blog!")
})

app.get("/canal/youtube", function(req, res) {
    res.send("<h1>Bem vindo ao meu canal do Youtube</h1>")
})

app.listen(4000, function(error) {
    if(error) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})