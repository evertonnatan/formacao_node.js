const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const conection = require("./database/database");

//DATABASE
conection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })


// ESTOU DIZENDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send("Formulário recebido! titulo: " + titulo + " " + "descricao: " + descricao)
})

app.listen(8080, () => {
    console.log("App rodando");
});