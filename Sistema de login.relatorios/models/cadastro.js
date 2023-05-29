//Nodejs nodemon

const db = require('./db')

//Adicionar dados no sql
const cadastro = db.sequelize.define('manutencaos', {
    Empresa: {
        type: db.Sequelize.STRING
    },
    WTG: {
        type: db.Sequelize.STRING
    },
    Site: {
        type: db.Sequelize.STRING
    },
    Tecnico1: {
        type: db.Sequelize.STRING
    },
    Tecnico2: {
        type: db.Sequelize.STRING
    },
    Data: {
        type: db.Sequelize.STRING
    },
    Tipo_manutencao: {
        type: db.Sequelize.STRING
    },
    Atividade: {
        type: db.Sequelize.STRING
    },
    Responsavel: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//usuarios.sync({force: true})

module.exports = cadastro