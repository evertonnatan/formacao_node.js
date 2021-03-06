const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const conection = require("./database/database");
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

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


// ROTAS    

app.get("/", (req, res) => {
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC'] // ASC = crescente || DESC = descrescente
    ] }).then(perguntas => {
        res.render("index", {
            perguntas,
        });
    })    
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({
        titulo,
        descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {id}
    }).then(pergunta => {
        if(pergunta != undefined){

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            }).then(respostas => {

                res.render("pergunta", {
                    pergunta, respostas
                })
            })
            
        } else {
            res.redirect("/")
        }
    })
})

app.post("/responder", (req, res) => {
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    Resposta.create({ 
        corpo,
        perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId)
    })
})

app.listen(8080, () => {
    console.log("App rodando");
});