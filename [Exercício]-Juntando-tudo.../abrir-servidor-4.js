const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/conta", (request, response) => {
    const data = {
        val_num1: request.query.num1,
        val_num2: request.query.num2,
        val_operacao: request.query.operacao
    }

    if (data.val_operacao == '+') {
        data.resultado = parseFloat(data.val_num1) + parseFloat(data.val_num2)
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
        <p>Resultado:<br>${data.val_num1} + ${data.val_num2} = ${data.resultado}</p>
    </div>`
        );
    }
    if (data.val_operacao == '-') {
        data.resultado = parseFloat(data.val_num1) - parseFloat(data.val_num2)
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
        <p>Resultado:<br>${data.val_num1} - ${data.val_num2} = ${data.resultado}</p>
    </div>`
        );
    }
    if (data.val_operacao == '*') {
        data.resultado = parseFloat(data.val_num1) * parseFloat(data.val_num2)
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
        <p>Resultado:<br>${data.val_num1} * ${data.val_num2} = ${data.resultado}</p>
    </div>`
        );
    }
    if (data.val_operacao == '/') {
        data.resultado = parseFloat(data.val_num1) / parseFloat(data.val_num2)
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
        <p>Resultado:<br>${data.val_num1} / ${data.val_num2} = ${data.resultado}
        <br>Resto: ${data.val_num1 % data.val_num2}</p>
    </div>`
        );
    }
    else{
        data.resultado = parseFloat(data.val_num1) - parseFloat(data.val_num2)
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
        <p>Resultado:<br>Não foi possivel</p>
    </div>`
        );
    }
    
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});