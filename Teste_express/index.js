const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');

//config
    //template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados postgresql
    const sequelize = new Sequelize('banco_teste'/**nome do banco */, 'postgres'/** nome do usuario*/, 'samuca2080#'/**senha do usuario */, {
        host: "localhost"/**loca que a máquina do db está */,
        dialect: "postgres"/**db que está sendo usado */
    });

//Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
});

app.post('/add', function(req, res){
    res.send('FORMULARIO RECEBIDO!')
})


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});