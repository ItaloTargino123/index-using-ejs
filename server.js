const express = require("express");
const app = express();
//Falando que a ferramenta para rederizar o html vai ser view engine
app.set("view engine", "ejs");

//Criar rota do homepage
app.get("/", function (req, res) {
    res.render("pages/index");
})

//Criar rota do sobre
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

//Dizer que o server tem que rodar quando entrar na porta 8080 (fica ouvindo uma porta)
app.listen(8080);
console.log("Rodando");