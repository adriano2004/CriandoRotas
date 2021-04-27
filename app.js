//Variáveis
const express = require("express");
const app = express();

//Caminho para a página cadastro de produto 
app.get("/guilherme/produto.html", function(req, res) {
    res.sendFile(__dirname + "/guilherme/produto.html");
});

//Caminho para página menu
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Caminha para página cadastro de clientes
app.get("/adriano/cliente.html", function(req, res) {
  res.sendFile(__dirname + "/adriano/cliente.html");
});

//abre a página menu quando requisitado o localhost
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Aplicação escutando na porta 5000
app.listen(5000);


