const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//config
    //template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Conexão com o banco de dados postgresql
    const sequelize = new Sequelize('banco_teste'/**nome do banco */, 'postgres'/** nome do usuario*/, 'Samuca2080#'/**senha do usuario */, {
        host: "localhost"/**loca que a máquina do db está */,
        dialect: "postgres"/**db que está sendo usado */
    });

//Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
});

app.post('/add', function(req, res){
    req.body.conteudo
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});