


const Sequelize = require('sequelize')
const db = require('./db')

// Definindo o modelo da tabela "manutencaos"
const Relatorios = db.sequelize.define('manutencaos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Empresa: Sequelize.STRING,
    WTG: Sequelize.STRING,
    Site: Sequelize.STRING,
    Tecnico1: Sequelize.STRING,
    Tecnico2: Sequelize.STRING,
    Data: Sequelize.STRING,
    Responsavel: Sequelize.STRING,
    Tipo_manutencao: Sequelize.STRING,
    Responsavel: Sequelize.STRING

});

// Executando a consulta para buscar os relatorios dentro dos servidor
Relatorios.findAll().then((manutencaos) => {
    console.log(manutencaos);
}).catch((erro) => {
    console.log('Erro ao buscar os Relatorios: ', erro);
});


module.exports = Relatorios