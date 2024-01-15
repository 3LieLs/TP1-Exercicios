atividade1.style.display = 'none'
atividade2.style.display = 'none'
atividade3.style.display = 'none'
atividade4.style.display = 'none'
atividade5.style.display = 'none'
atividade6.style.display = 'none'
atividade7.style.display = 'none'

inicioVal = window.document.querySelector('div#inicio')
botaoIniciarVal = window.document.querySelector('input#botaoIniciar')
botaoIniciarVal.addEventListener('click', botaoIniciarClick)
//inicioVal.style.display = 'none'

function botaoIniciarClick() {
    inicioVal.style.display = 'none'
    atividade1.style.display = 'contents'
}

/*-----Atividade 1----------Atividade 1----------Atividade 1----------Atividade 1----------Atividade 1-----*/
atividade1Val = window.document.querySelector('div#atividade1')
proximaAtv1Val = window.document.querySelector('input#proximaAtv1')
proximaAtv1Val.addEventListener('click', proximaAtv1Click)

function proximaAtv1Click() {
    atividade1.style.display = 'none'
    atividade2.style.display = 'contents'
}

textoDigitado = window.document.querySelector('input#texto')
resultadoTextoVal = window.document.querySelector('p#resultadoTexto')
botaoTextoVal = window.document.querySelector('input#botaoTexto')
botaoTextoVal.addEventListener('click', botaoTextoClick)

function botaoTextoClick() {
    textoDigitadoVal = String(textoDigitado.value)
    resultadoTextoVal.innerHTML = `${textoDigitadoVal}`
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 2----------Atividade 2----------Atividade 2----------Atividade 2----------Atividade 2-----*/
atividade2Val = window.document.querySelector('div#atividade2')
proximaAtv2Val = window.document.querySelector('input#proximaAtv2')
proximaAtv2Val.addEventListener('click', proximaAtv2Click)
anteriorAtv2Val = window.document.querySelector('input#anteriorAtv2')
anteriorAtv2Val.addEventListener('click', anteriorAtv2Click)

function proximaAtv2Click() {
    atividade2.style.display = 'none'
    atividade3.style.display = 'contents'
}
function anteriorAtv2Click() {
    atividade1.style.display = 'contents'
    atividade2.style.display = 'none'
}
var tamanhoWidth = 40
var tamanhoFonte = 100

atividade2MensagemVal = window.document.querySelector('p#atividade2Mensagem')
botaoAumentarTamanhoVal = window.document.querySelector('input#botaoAumentarTamanho')
botaoAumentarTamanhoVal.addEventListener('click', botaoAumentarTamanhoClick)

botaoDiminuirTamanhoVal = window.document.querySelector('input#botaoDiminuirTamanho')
botaoDiminuirTamanhoVal.addEventListener('click', botaoDiminuirTamanhoClick)

function botaoAumentarTamanhoClick() {
    tamanhoWidth = tamanhoWidth + 5
    tamanhoFonte = tamanhoFonte + 5
    atividade2MensagemVal.style.width = `${tamanhoWidth}%`
    atividade2MensagemVal.style.fontSize = `${tamanhoFonte}%`
}
function botaoDiminuirTamanhoClick() {
    tamanhoWidth = tamanhoWidth - 5
    tamanhoFonte = tamanhoFonte - 5
    atividade2MensagemVal.style.width = `${tamanhoWidth}%`
    atividade2MensagemVal.style.fontSize = `${tamanhoFonte}%`
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 3----------Atividade 3----------Atividade 3----------Atividade 3----------Atividade 3-----*/
atividade3Val = window.document.querySelector('div#atividade3')
proximaAtv3Val = window.document.querySelector('input#proximaAtv3')
proximaAtv3Val.addEventListener('click', proximaAtv3Click)
anteriorAtv3Val = window.document.querySelector('input#anteriorAtv3')
anteriorAtv3Val.addEventListener('click', anteriorAtv3Click)

function proximaAtv3Click() {
    atividade3.style.display = 'none'
    atividade4.style.display = 'contents'
}
function anteriorAtv3Click() {
    atividade2.style.display = 'contents'
    atividade3.style.display = 'none'
}
var imagem = 0

imagemVal = window.document.querySelector('img#capivara')
trocarImagemVal = window.document.querySelector('input#trocarImagem')
trocarImagemVal.addEventListener('click', trocarImagemClick)

function trocarImagemClick() {
    imagem++
    if (imagem == 1) {
        imagemVal.src = 'img/capivara1.jpg'
    }
    if (imagem == 2) {
        imagemVal.src = 'img/capivara2.jpg'
    }
    if (imagem == 3) {
        imagemVal.src = 'img/capivara3.jpg'
    }
    if (imagem > 3) {
        imagem = 1
        imagemVal.src = 'img/capivara1.jpg'
    }
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 4----------Atividade 4----------Atividade 4----------Atividade 4----------Atividade 4-----*/
atividade4Val = window.document.querySelector('div#atividade4')
proximaAtv4Val = window.document.querySelector('input#proximaAtv4')
proximaAtv4Val.addEventListener('click', proximaAtv4Click)
anteriorAtv4Val = window.document.querySelector('input#anteriorAtv4')
anteriorAtv4Val.addEventListener('click', anteriorAtv4Click)

function proximaAtv4Click() {
    atividade4.style.display = 'none'
    atividade5.style.display = 'contents'
}
function anteriorAtv4Click() {
    atividade3.style.display = 'contents'
    atividade4.style.display = 'none'
}

listaElementoVal = window.document.querySelector('input#listaElemento')
botaoListaVal = window.document.querySelector('input#botaoLista')
listaVal = window.document.querySelector('ol#lista')
var x = 0

botaoListaVal.addEventListener('click', botaoListaClick)

function botaoListaClick() {
    if (x >= 10) {
        alert(`Número máximo da lista alcançado`)
    } else {
        let novoElemento = [x]
        novoElemento[x] = window.document.createElement('li')
        listaElementoVal = String(listaElemento.value)
        novoElemento[x].innerHTML = (`${listaElementoVal}`)
        listaVal.appendChild(novoElemento[x])
        x++
    }
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 5----------Atividade 5----------Atividade 5----------Atividade 5----------Atividade 5-----*/
atividade5Val = window.document.querySelector('div#atividade5')
proximaAtv5Val = window.document.querySelector('input#proximaAtv5')
proximaAtv5Val.addEventListener('click', proximaAtv5Click)
anteriorAtv5Val = window.document.querySelector('input#anteriorAtv5')
anteriorAtv5Val.addEventListener('click', anteriorAtv5Click)

function proximaAtv5Click() {
    atividade5.style.display = 'none'
    atividade6.style.display = 'contents'
}
function anteriorAtv5Click() {
    atividade4.style.display = 'contents'
    atividade5.style.display = 'none'
}

botaoApertoVal = window.document.querySelector('input#botaoAperto')
botaoApertoVal.addEventListener('click', botaoApertoClick)
var cliques = 0

function botaoApertoClick() {
    cliques++
    botaoAperto.value = `Cliques: ${cliques}`
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 6----------Atividade 6----------Atividade 6----------Atividade 6----------Atividade 6-----*/
atividade6Val = window.document.querySelector('div#atividade6')
proximaAtv6Val = window.document.querySelector('input#proximaAtv6')
proximaAtv6Val.addEventListener('click', proximaAtv6Click)
anteriorAtv6Val = window.document.querySelector('input#anteriorAtv6')
anteriorAtv6Val.addEventListener('click', anteriorAtv6Click)

function proximaAtv6Click() {
    atividade6.style.display = 'none'
    atividade7.style.display = 'contents'
}
function anteriorAtv6Click() {
    atividade5.style.display = 'contents'
    atividade6.style.display = 'none'
}

destaqueVal = window.document.querySelector('p#destaque')
cor = window.document.createAttribute('class')
botaoRVal = window.document.querySelector('input#botaoR')
botaoGVal = window.document.querySelector('input#botaoG')
botaoBVal = window.document.querySelector('input#botaoB')

botaoRVal.addEventListener('click', botaoRClick)
botaoGVal.addEventListener('click', botaoGClick)
botaoBVal.addEventListener('click', botaoBClick)

function botaoRClick() {
    cor.value = 'corVermelho'
    destaqueVal.setAttributeNode(cor)
}
function botaoGClick() {
    cor.value = 'corVerde'
    destaqueVal.setAttributeNode(cor)
}
function botaoBClick() {
    cor.value = 'corAzul'
    destaqueVal.setAttributeNode(cor)
}
/*---------------------------------------------------------------------------------------------------------*/

/*-----Atividade 7----------Atividade 7----------Atividade 7----------Atividade 7----------Atividade 7-----*/
atividade7Val = window.document.querySelector('div#atividade7')
anteriorAtv7Val = window.document.querySelector('input#anteriorAtv7')
anteriorAtv7Val.addEventListener('click', anteriorAtv7Click)

function anteriorAtv7Click() {
    atividade6.style.display = 'contents'
    atividade7.style.display = 'none'
}
/*---------------------------------------------------------------------------------------------------------*/
