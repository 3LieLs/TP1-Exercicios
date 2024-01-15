/////-----EXERCÍCIO 1-----/////
var pessoa = {}
function nomeVal() {
    pessoa.nome = prompt(`Digite seu nome: `)
}
function idadeVal() {
    pessoa.idade = prompt(`Digite sua idade: `)
}
function profissaoVal() {
    pessoa.profissao = prompt(`Digite sua profissão: `)
}
function revVal1() {
    if (pessoa.nome == undefined || pessoa.idade == undefined || pessoa.profissao == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    else {
        alert(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nProfissão: ${pessoa.profissao}`)
    }
}

/////-----EXERCÍCIO 2-----/////
var carro = {}
function marcaVal() {
    carro.marca = prompt(`Digite a marca do carro: `)
}
function modeloVal() {
    carro.modelo = prompt(`Digite o modelo do carro: `)
}
function anoVal() {
    carro.ano = prompt(`Digite o ano do carro: `)
}
function revVal2() {
    if (carro.marca == undefined || carro.modelo == undefined || carro.ano == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    else {
        alert(`Marca: ${carro.marca}\nModelo: ${carro.modelo}\nAno: ${carro.ano}`)
    }
}

/////-----EXERCÍCIO 3-----/////
var retangulo = {}
function larguraVal() {
    retangulo.largura = prompt(`Digite a largura do retangulo: `)
}
function alturaVal() {
    retangulo.altura = prompt(`Digite a altura do retangulo: `)
}
function areaVal() {
    if (retangulo.largura == undefined || retangulo.altura == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    /*else if (retangulo.largura == String || retangulo.altura == String) {
        alert(`Digite apenas valores numéricos`)
    }*/
    else {
        alert(`Área do retangulo =  ${retangulo.largura}(L) x ${retangulo.altura}(A) = ${retangulo.largura * retangulo.altura}`)
    }
}

/////-----EXERCÍCIO 4-----/////
var contaBancaria = {}
function saldoVal() {
    contaBancaria.saldo = prompt(`Digite o seu saldo: `)
    contaBancaria.saldo
}
function recebidoVal() {
    contaBancaria.recebido = prompt(`Digite o valor recebido: `)
    
}
function gastoVal() {
    contaBancaria.gasto = prompt(`Digite o valor gasto: `)
}
function consultarSaldo() {
    if (contaBancaria.saldo == undefined) {
        alert(`Você não informou o saldo.`)
    }
    else if (contaBancaria.gasto == undefined && contaBancaria.recebido == undefined) {
        alert(`Saldo atual = ${contaBancaria.saldo}`)
    }
    else if (contaBancaria.gasto == undefined) {
        contaBancaria.saldoAtual = parseFloat(contaBancaria.saldo) + parseFloat(contaBancaria.recebido)
        alert(`Saldo atual = ${contaBancaria.saldoAtual}`)
    }
    else if (contaBancaria.recebido == undefined) {
        contaBancaria.saldoAtual = contaBancaria.saldo - contaBancaria.gasto
        alert(`Saldo atual = ${contaBancaria.saldoAtual}`)
    }
    else {
        contaBancaria.saldoAtual = parseFloat(contaBancaria.saldo) + parseFloat(contaBancaria.recebido)
        contaBancaria.saldoAtual = contaBancaria.saldoAtual - contaBancaria.gasto
        alert(`Saldo atual = ${contaBancaria.saldoAtual}`)
    }
    contaBancaria.saldoAtual = contaBancaria.saldo 
}

/////-----EXERCÍCIO 5-----/////
var aluno = {}, media = []
function nomeVal2() {
    aluno.nome = prompt(`Digite o nome do aluno: `)
}
function idadeVal2() {
    aluno.idade = prompt(`Digite a idade do aluno: `)
}
function notasVal() {
    aluno.notas = prompt(`Digite a nota do aluno: `)
    media.push(parseFloat(aluno.notas))
}
function mediaVal() {
    if (aluno.nome == undefined || aluno.idade == undefined || aluno.notas == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    else {
    let mediaTotal = media.reduce((notaInicial, nota) => notaInicial + nota)
    mediaTotal = mediaTotal / media.length
    alert(`Aluno: ${aluno.nome}\nIdade: ${aluno.idade}\nValor da média: ${mediaTotal}`)
    }
}

/////-----EXERCÍCIO 6-----/////
var produto = {}, valorDesconto = 0, valorTotal = 0
function nomeVal3() {
    produto.nome = prompt(`Digite o nome do produto: `)
}
function precoVal() {
    produto.preco = prompt(`Digite o preço do produto: `)
}
function descontoVal() {
    produto.desconto = prompt(`Digite o desconto do produto: `)
}
function calcularPrecoComDesconto() {
    if (produto.nome == undefined || produto.preco == undefined || produto.desconto == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    else if(produto.desconto > 100 || produto.desconto < 0){
        alert(`Desconto não pode ser acima de 100% ou abaixo de 0%`)
    }
    else {
        valorDesconto = (parseFloat(produto.desconto) * parseFloat(produto.preco)) / 100
        valorFinal = produto.preco - valorDesconto
        alert(`Produto: ${produto.nome}\n${produto.desconto}% de ${produto.preco}R$ = ${valorDesconto}R$\nPreço do produto com desconto: ${valorFinal}R$`)
    }
}

/////-----EXERCÍCIO 7-----/////
var livro = {}
function tituloVal() {
    livro.titulo = prompt(`Digite o titulo do livro.`)
}
function autorVal() {
    livro.autor = prompt(`Digite o autor do livro.`)
}
function anoPublicacaoVal() {
    livro.anoPublicacao = prompt(`Digite o ano da publicação do livro.`)
}
function exibirVal() {
    if (livro.titulo == undefined || livro.autor == undefined || livro.anoPublicacao == undefined) {
        alert(`Você não selecionou todos os botões.`)
        console.log(`Titulo: ${livro.titulo}.\nAutor: ${livro.autor}.\nAno publicado: ${livro.anoPublicacao}.`)
    }
    else {
        alert(`Titulo: ${livro.titulo}.\nAutor: ${livro.autor}.\nAno publicado: ${livro.anoPublicacao}.`)
        console.log(`Titulo: ${livro.titulo}.\nAutor: ${livro.autor}.\nAno publicado: ${livro.anoPublicacao}.`)
    }
}

/////-----EXERCÍCIO 8-----/////
var usuario = {}
function usuNomeVal() {
    usuario.nome = prompt(`Digite o nome do usuário`)
}
function emailVal() {
    usuario.email = prompt(`Digite o seu email`)
}
function senhaVal() {
    usuario.senha = prompt(`Digite sua senha`)
}
function validarSenha() {
    if (usuario.nome != undefined || usuario.email != undefined || usuario.senha != undefined) {
        usuario.validarSenha = prompt(`Digite sua senha novamente`)
        if (usuario.senha == usuario.validarSenha) {
            alert(`Senha correta.`)
            alert(`Usuário: ${usuario.nome}\nEmail: ${usuario.email}\nSenha${usuario.senha}`)
        }
        else {
            alert(`Senha incorreta.`)
        }
    }
    else {
        alert(`Você não selecionou todos os botões.`)

    }
}

/////-----EXERCÍCIO 9-----/////
var cachorro = {}, latidos = []
function nomeCachorroVal() {
    cachorro.nome = prompt(`Digite o nome do cachorro: `)
}
function idadeCachorroVal() {
    cachorro.idade = prompt(`Digite a idade do cachorro: `)
}

function latirVal() {
    if (cachorro.nome == undefined || cachorro.idade == undefined) {
        alert(`Você não selecionou todos os botões.`)
    }
    else {
        for (let x = 0; x < cachorro.idade; x++) {
            latidos.push("AU") 
        }
        alert(`${cachorro.nome} falou o seguinte:\n${latidos}`)
    }
    latidos = []
}