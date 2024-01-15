pair_or_odd.style.display = 'none'
choose_number.style.display = 'none'
resultado.style.display = 'none'
reiniciar.style.display = 'none'

var choose_pc = 0

function yes() {
    pc.innerHTML = 'Vamos começar, escolha a sua opção'
    y.style.display = 'none'
    n.style.display = 'none'
    pair_or_odd.style.display = 'contents'
}

function pair() {
    pc.innerHTML = 'Você escolheu par, agora escolha um número'
    choose_pc = 2
    pair_or_odd.style.display = 'none'
    choose_number.style.display = 'contents'
}

function odd() {
    pc.innerHTML = 'Você escolheu impar, agora escolha um número'
    choose_pc = 1
    pair_or_odd.style.display = 'none'
    choose_number.style.display = 'contents'
}

function luck() {

    //Calcular valor do PC e Usuário//
    pc.innerHTML = 'Aqui está o resultado'
    let pc_val = Math.round(Math.random() * (5 - 0) + 0);
    let human = window.document.getElementById('choose')
    let human_val = Number(human.value)
    let resul_val = pc_val + human_val

    if (human_val >= 0 && human_val <= 5) {
        //Demonstrar o resultado dependendo da escolha do Usuário//
        choose_number.style.display = 'none'
        if (choose_pc == 1) {
            if (resul_val % 2 == 0) {
                resultado.innerHTML = (`Eu escolhi o número <strong>${pc_val}</strong> e você escolheu o número <strong>${human_val}</strong> e a opção <strong>impar</strong>...<br> ou seja eu <strong>Venci</strong><br><input id="reiniciar" type="button" value="Reiniciar" onclick="restart()">`)
                resultado.style.display = 'contents'
            } else {
                resultado.innerHTML = (`Eu escolhi o número <strong>${pc_val}</strong> e você escolheu o número <strong>${human_val}</strong> e a opção <strong>impar</strong>...<br> ou seja eu <strong>Perdi</strong><br><input id="reiniciar" type="button" value="Reiniciar" onclick="restart()">`)
                resultado.style.display = 'contents'
            }
        }
        if (choose_pc == 2) {
            if (resul_val % 2 == 0) {
                resultado.innerHTML = (`Eu escolhi o número <strong>${pc_val}</strong> e você escolheu o número <strong>${human_val}</strong> e a opção <strong>par</strong>...<br> ou seja eu <strong>Perdi</strong><br><input id="reiniciar" type="button" value="Reiniciar" onclick="restart()">`)
                resultado.style.display = 'contents'
            } else {
                resultado.innerHTML = (`Eu escolhi o número <strong>${pc_val}</strong> e você escolheu o número <strong>${human_val}</strong> e a opção <strong>par</strong>...<br> ou seja eu <strong>Venci</strong><br><input id="reiniciar" type="button" value="Reiniciar" onclick="restart()">`)
                resultado.style.display = 'contents'
            }
        }

    } else {
        //Demonstrar erro caso o Usuário não escolha um número de 0 a 5 ou escolha uma string//
        if (choose_pc == 1) {
            choose_number.style.display = 'none'
            pc.innerHTML = 'Infelizmente você escolheu um número inválido.<br><input id="again_odd" type="submit" value="Tente novamente" onclick="odd()">'
            choose.value = ''
        }
        else if (choose_pc == 2) {
            choose_number.style.display = 'none'
            pc.innerHTML = 'Infelizmente você escolheu um número inválido.<br><input id="again_pair" type="submit" value="Tente novamente" onclick="pair()">'
            choose.value = ''
        }
    }
}

function restart() {
    resultado.style.display = 'none'
    reiniciar.style.display = 'none'
    choose.value = ''
    pc.innerHTML = 'Vamos começar, escolha a sua opção'
    pair_or_odd.style.display = 'contents'
}

function nop() {
    pc.innerHTML = 'Ah, que pena, até a próxima'
    y.style.display = 'none'
    n.style.display = 'none'
}