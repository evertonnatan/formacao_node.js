const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article) // Uma categoria tem muitos artigos (relacionamento 1 para muitos)
Article.belongsTo(Category) // Um artigo pertence a uma categoria (relacionamento 1 X 1)



module.exports = Article