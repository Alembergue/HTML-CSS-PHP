//Nodejs nodemon

//Conexão com o banco de dados

const Sequelize = require('sequelize')

const sequelize = new Sequelize('relatorios', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'    
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}