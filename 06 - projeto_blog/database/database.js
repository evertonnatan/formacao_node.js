const Sequilize = require('sequelize')
const connection = new Sequilize('projeto_blog', 'root', '32@Lt85!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection