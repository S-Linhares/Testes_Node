const Sequelize = require('sequelize');

// Conexão com o banco de dados postgresql
const sequelize = new Sequelize('postapp'/**nome do banco */, 'postgres'/** nome do usuario*/, 'samuca2080#'/**senha do usuario */, {
    host: "localhost"/**loca que a máquina do db está */,
    dialect: "postgres"/**db que está sendo usado */
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}