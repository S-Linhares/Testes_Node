const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/templates/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/templates/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao blog!");
});

app.get("/ola/:cargo/:nome/:cor", function(req, res){ //passa parametro pelo dois pontos
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>"+"<h3>Sua cor favorita é: "+req.params.cor+"</h3>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});