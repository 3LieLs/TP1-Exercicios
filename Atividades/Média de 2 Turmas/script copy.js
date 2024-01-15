
    const maxAlunos = 3
    var nomesTurma1 = [], nomesTurma2 = [], nomeAluno1, nomeAluno2
    var notasTurma1 = [], notasTurma2 = [], notaAluno1, notaAluno2
    var numAlunosTurma1, numAlunosTurma2, mediaTotal1, mediaTotal2, notasTotal1, notasTotal2

    numAlunosTurma1 = prompt("Quantos alunos estão matriculados na turma 1? (Máximo de 50 alunos)\n")
    numAlunosTurma2 = prompt("Quantos alunos estão matriculados na turma 2? (Máximo de 50 alunos)\n")
    turma1()
    turma2()
    somaMedia()

    function turma1() {
        alert("Informe o nome e a média anual de cada aluno da turma 1:")
        for (let x = 0; x < numAlunosTurma1; x++) {
            nomeAluno1 = prompt(`${x + 1}° Nome:`)
            nomesTurma1.push(nomeAluno1)
            notaAluno1 = prompt(`${x + 1}° Média:`)
            notasTurma1.push(notaAluno1)
        }
        for (let x = 0; x < numAlunosTurma1; x++) {
            document.write(`Nomes da turma 1:${nomesTurma1[x]}   Notas da turma1: ${notasTurma1[x]}<br>`)
        }
        notasTotal1 = notasTurma1.reduce((prevnota, nota) => parseFloat(prevnota) + parseFloat(nota))
        document.write(`<br>Notas total da turma 1: ${notasTotal1}<br><br>`)
    }

    function turma2() {
        alert("Informe o nome e a média anual de cada aluno da turma 2:")
        for (let y = 0; y < numAlunosTurma2; y++) {
            nomeAluno2 = prompt(`${y + 1}° Nome:`)
            nomesTurma2.push(nomeAluno2)
            notaAluno2 = prompt(`${y + 1}° Média:`)
            notasTurma2.push(notaAluno2)
        }
        for (let x = 0; x < numAlunosTurma2; x++) {
            document.write(`Nomes da turma 2 :${nomesTurma2[x]}   Notas da turma2: ${notasTurma2[x]}<br>`)
        }
        notasTotal2 = notasTurma2.reduce((prevNota, nota) => parseFloat(prevNota) + parseFloat(nota))
        document.write(`<br>Notas total da turma 2: ${notasTotal2}<br><br>`)
    }

    function somaMedia() {
        mediaTotal1 = notasTotal1 / numAlunosTurma1
        mediaTotal2 = notasTotal2 / numAlunosTurma2
        document.write(`Média da turma 1 =  ${mediaTotal1}`)
        document.write(`Média da turma 2 =  ${mediaTotal2}`)

        if (mediaTotal1 > mediaTotal2) {
            document.write("Turma 1 foi superior.")
        }
        else if (mediaTotal1 < mediaTotal2) {
            document.write("Turma 2 foi superior.")
        }
        else {
            document.write("Houve um empate.")
        }
    }
