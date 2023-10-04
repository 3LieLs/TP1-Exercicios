const port = 8020;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/formulario", (request, response) => {
    response.render(`Nome: ${request.query.nome}<br> Sobrenome: ${request.query.sobrenome}<br> Cidade: ${request.query.cidade}`);
    /*
    response.send(
        `<div style="
        position: absolute;
        background-color: orangered;
        border: solid 8px black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 90%;
        text-align: center;
        font-size: 200%;">
    <p>Nome: ${request.query.nome}</p>
    <p>Sobrenome: ${request.query.sobrenome}</p>
    <p>Cidade: ${request.query.cidade}</p>
</div>`
    );*/
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});