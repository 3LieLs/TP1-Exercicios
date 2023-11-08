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

app.get("/objetivos", (request, response) => {
    response.render("objetivos");
});

app.get("/tec", (request, response) => {
    response.render("tec");
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});