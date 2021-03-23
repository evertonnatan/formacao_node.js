const express = require('express') // IMPORTANDO O EXPRESS
const app = express() // INICIANDO O EXPRESS

app.get("/", function(req, res) {
    res.send("Bem vindo à página home")
})

app.get("/blog/:artigo?", function(req, res) { // Inserindo paramêtros OPCIONAIS na rota 'blog'

    let artigo = req.params.artigo

    if (artigo) {
        res.send("<h2>Artigo: " + artigo + "</h2>")
    } else {
        res.send("<h3>Bem vindo ao meu blog!: www.evertonnatan.com</h3>")
    }
    
})

app.get("/canal/youtube", function(req, res) {
    res.send("<h1>Bem vindo ao meu canal do Youtube</h1>")
})
app.get("/ola/:nome/:empresa", function(req, res) { // Inserindo paramêtros OBRIGATÓRIOS na rota 'ola'
// REQ => DADOS ENVIADOS PELO USUÁRIO
// RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    let nome = req.params.nome
    let empresa = req.params.empresa
    
    res.send("<h1>Oi! " + nome + " do " + empresa + "</h1>")
})

app.listen(4000, function(error) {
    if(error) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso. Rodando na porta 4000")
    }
})