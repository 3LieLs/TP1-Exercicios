
function mediaTurma() {
    var nome1=[]


    document.getElementById('nomeAlu11').onclick = function () {

        let x=0
        let nome = (document.getElementById("nomeAlu1").value)
        nome1.push (nome)
        document.getElementById("resultado1").innerHTML = (`Nome ${x+1} = ${nome1[x]}`)
    }
    document.getElementById('mediaAlu11').onclick = function () {
        let media = parseFloat(document.getElementById("mediaAlu1").value)
        document.getElementById("resultado2").innerHTML = (`Média 1 = ${media}`)
    }

    document.getElementById('nomeAlu22').onclick = function () {
        let nome = document.getElementById("nomeAlu2").value
        document.getElementById("resultado3").innerHTML = (`Nome 2 = ${nome}`)

    }
    document.getElementById('mediaAlu22').onclick = function () {
        let media = parseFloat(document.getElementById("mediaAlu2").value)
        document.getElementById("resultado4").innerHTML = (`Média 2 = ${media}`)
    }

    document.getElementById('mediaTotal').onclick = function() {
        let media1 = parseFloat(document.getElementById("mediaAlu1").value)
        let media2 = parseFloat(document.getElementById("mediaAlu2").value)

        mediaTotal = (media1 + media2) / 2
        document.getElementById("resultado5").innerHTML = (`Média das duas turmas juntas = ${mediaTotal}`)
        for(let y = 0;y<5;y++){
        document.write(`Nome ${y+1} = ${nome1[y]}`)
        document.getElementById("resultado5").innerHTML = (`Nome ${y+1} = ${nome1[y]}`)

   }
}
}
