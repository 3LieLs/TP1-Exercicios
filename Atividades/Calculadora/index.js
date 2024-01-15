function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)


    document.getElementById('b1').onclick = function () {
        let resultadin = num1 * num2
        let valor = num1 * num2
        let resultadin2 = (valor % 2)
        document.getElementById("result").innerHTML = resultadin
        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
    }
    document.getElementById('b2').onclick = function () {
        let resultadin = num1 + num2
        let valor = num1 + num2
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
        document.getElementById("result").innerHTML = resultadin
    }
    document.getElementById('b3').onclick = function () {
        let resultadin = num1 - num2
        document.getElementById("result").innerHTML = resultadin
        let valor = num1 - num2
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
    }
    document.getElementById('b4').onclick = function () {
        let resultadin = num1 / num2
        document.getElementById("result").innerHTML = resultadin
        let valor = num1 / num2
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
    }
    document.getElementById('b5').onclick = function () {
        let resultadin = Math.pow(num1, num2)
        document.getElementById("result").innerHTML = resultadin
        let valor = Math.pow(num1, num2)
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
    }
    document.getElementById('b6').onclick = function () {
        let resultadin = Math.sqrt(num1, num2)
        document.getElementById("result").innerHTML = resultadin
        let valor = Math.sqrt(num1, num2)
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result2").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result2").innerHTML = ('É IMPAR')
        }
    }
}
function xbca() {
    let num3 = parseFloat(document.getElementById("num3").value)
    let num4 = parseFloat(document.getElementById("num4").value)
    let num5 = parseFloat(document.getElementById("num5").value)


    document.getElementById('b7').onclick = function () {
        let resultadin = num3 * num5 / num4
        document.getElementById("x=").innerHTML = resultadin

        let valor = num3 * num5 / num4
        let resultadin2 = (valor % 2)

        if (resultadin2 == 0) {
            document.getElementById("result4").innerHTML = ('É PAR')
        }
        else if (resultadin2 != 0) {
            document.getElementById("result4").innerHTML = ('É IMPAR')
        }
    }
}

