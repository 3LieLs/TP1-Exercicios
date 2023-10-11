const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/adicao", (request, response) => {
    val_num1 = request.query.num1
    val_num2 = request.query.num2
    resultado = parseFloat(val_num1) + parseFloat(val_num2)
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
    <p>Resultado:<br>${val_num1} + ${val_num2} = ${resultado}</p>
</div>`
    );
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});