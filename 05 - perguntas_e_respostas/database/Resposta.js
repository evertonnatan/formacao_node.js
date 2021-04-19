//É UMA BOA PRÁTICA INICIAR MODELS (ARQUIVOS QUE DEFINEM TABELAS DO DB, ou seja, representações de tabelas do banco de dados em linguagem JS) COM LETRAS MAIÚSCULAS
 
const Sequelize = require("sequelize")
const connection = require("./database")

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({ force: false })

module.exports = Resposta