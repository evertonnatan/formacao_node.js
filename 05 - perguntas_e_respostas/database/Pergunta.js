//É UMA BOA PRÁTICA INICIAR MODELS (ARQUIVOS QUE DEFINEM TABELAS DO DB, ou seja, representações de tabelas do banco de dados em linguagem JS) COM LETRAS MAIÚSCULAS
 
const Sequelize = require("sequelize")
const conection = require("./database")

const Pergunta = conection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false}).then(() => {})