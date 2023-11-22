const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
const fs = require("fs");
app.set('view engine', 'ejs');
app.use(express.static('public'))

//const cors = require('cors')
//app.use(cors())



app.get("/", (request, response) => {
    response.render("index");
});

app.get("/motivacao", (request, response) => {
    response.render("motivacao"); 
});

app.get("/sobre", (request, response) => {
    response.render("sobre");
});

app.get("/agradecimento", (request, response) => {
    response.render("agradecimento");
});

app.get("/formulario", (request, response) => {
    response.render("formulario");
});


app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});