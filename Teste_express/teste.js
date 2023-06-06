const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco_teste'/**nome do banco */, 'postgres'/** nome do usuario*/, 'senha'/**senha do usuario */, {
    host: "localhost"/**loca que a máquina do db está */,
    dialect: "postgres"/**db que está sendo usado */
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se  conectar: "+erro)
})

const Postagem = sequelize.define('postagens', { /**criação de MODEL para criar uma tabela chamada postagens e com os atributos titulo e conteudo. String tem tamanho limitado, text não */
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/** Postagem.sync({force: true}) || Essa função sincroniza o MODEL como o banco de dados. O objeto JASON com parametro force true, garante que a tabela será gerada */

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/** Usuario.sync({force: true})*/

/** Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "muita coisa escrita em um só arquivo para testes de 1 a 3 concepções!!"
}) || Função que faz o INSERT INTO na tabela*/

/** Usuario.create({
    nome: "Samuel",
    sobrenome: "Linhares",
    idade: 22,
    email: "samuelson.daledeli@gmail.com"
}) */
