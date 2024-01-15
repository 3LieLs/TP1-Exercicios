const port = 8020;
var cont = 0

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

//const cors = require('cors')
//app.use(cors())



app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/cadastro", (request, response) => {
    response.render("cadastro");
});

app.get("/personagens", (request, response) => {
    response.render("personagens");
});

app.get("/sobre", (request, response) => {
    response.render("sobre");
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});