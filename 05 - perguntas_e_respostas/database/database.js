const Sequilize = require('sequelize')

const conection = new Sequilize('guiaperguntas', 'root', '32@Lt85!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conection