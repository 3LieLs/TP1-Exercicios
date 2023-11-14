const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/conversao", (request, response) => {
    real = request.query.moeda
    peso = real*69.54
    pesoFormatado = peso.toFixed(2);
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
    <p>Valor em Peso argentino:<br> ${pesoFormatado}</p>
</div>`
    );
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});