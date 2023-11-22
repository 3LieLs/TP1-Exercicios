const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");
app.use(express.urlencoded({ extended: true }))
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

app.post("/agradecimento", (request, response) => {

    let nomeForm = request.body.nomeLabel
    let idadeForm = request.body.idadeLabel
    let emailForm = request.body.emailLabel
    let telefoneForm = request.body.telefoneLabel
    let CEPForm = request.body.CEPLabel
    let enderecoForm = request.body.enderecoLabel
    let tipoSanguineoForm = request.body.tipoSanguineoLabel


    let cadastro = {
        'nome': nomeForm,
        'idade': idadeForm,
        'email': emailForm,
        'telefone': telefoneForm,
        'CEP': CEPForm,
        'endereco': enderecoForm,
        'sangue': tipoSanguineoForm,

    }

    //fs.writeFileSync('nome.txt', nome) //Sobreescreve o nome no arquivo
    fs.appendFileSync('nome.json', `\n${JSON.stringify(cadastro)}`) //Adiciona um nome no arquivo
    //JSON.stringify() Transforma em string
    //JSON.parse() transforma em JSON


    resultado = (`${nomeForm}`)
    response.render("agradecimento", { resultado });
});

app.get("/salvar", (request, response) => {
    response.render("formulario");
});


app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});