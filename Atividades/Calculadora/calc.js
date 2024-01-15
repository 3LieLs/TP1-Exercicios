var numeros = [""], totalNum
var result = 0, sin = "", carac = "", carac2 = ""

function adc() {
    document.getElementById('0').onclick = function () {
        numeros.push("0")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }

    document.getElementById('1').onclick = function () {
        
        numeros.push("1")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('2').onclick = function () {
        numeros.push("2")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('3').onclick = function () {
        numeros.push("3")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('4').onclick = function () {
        numeros.push("4")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('5').onclick = function () {
        numeros.push("5")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('6').onclick = function () {
        numeros.push("6")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('7').onclick = function () {
        numeros.push("7")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('8').onclick = function () {
        numeros.push("8")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
    document.getElementById('9').onclick = function () {
        numeros.push("9")
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)

    }
}
function util(){
    document.getElementById('del').onclick = function (){
        numeros.pop()
        totalNum = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = (`.${totalNum}`)
        if(numeros.length == 0){
            document.getElementById('numeros').innerHTML = (`0`)
        }
    }
    document.getElementById('c').onclick = function (){
        numeros.length = 0
        totalNum = numeros
        document.getElementById('numeros').innerHTML = (`0`)
        document.getElementById('miniNum').innerHTML = (`.`)
        document.getElementById('result').innerHTML = (`.`)
    }

}
function calculo() {
    document.getElementById('adi').onclick = function () {
        carac = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = ("+")
        document.getElementById('miniNum').innerHTML = (`${carac} +`)
        numeros.length = 0
        sin = "+"
    }
    document.getElementById('sub').onclick = function () {
        carac = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = ("-")
        document.getElementById('miniNum').innerHTML = (`${carac} -`)
        numeros.length = 0
        sin = "-"

    }
    document.getElementById('mult').onclick = function () {
        carac = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = ("x")
        document.getElementById('miniNum').innerHTML = (`${carac} x`)
        numeros.length = 0
        sin = "*"

    }
    document.getElementById('div').onclick = function () {
        carac = numeros.reduce((prevNum, num) => prevNum + num)
        document.getElementById('numeros').innerHTML = ("/")
        document.getElementById('miniNum').innerHTML = (`${carac} /`)
        numeros.length = 0
        sin = "/"

    }
    document.getElementById('same').onclick = function () {
        if (sin == "+") {
            carac2 = numeros.reduce((prevNum, num) => prevNum + num)
            parseFloat(carac2)
            parseFloat(carac)
            result = carac + carac2
            document.getElementById('result').innerHTML = (result)    
        }
        if (sin == "-"){
            carac2 = numeros.reduce((prevNum, num) => prevNum + num)
            parseFloat(carac2)
            parseFloat(carac)
            result = carac - carac2
            document.getElementById('result').innerHTML = (result)    
        }
        if (sin == "*"){
            carac2 = numeros.reduce((prevNum, num) => prevNum + num)
            parseFloat(carac2)
            parseFloat(carac)
            result = carac * carac2
            document.getElementById('result').innerHTML = (result) 
        }
        if (sin == "/"){
            carac2 = numeros.reduce((prevNum, num) => prevNum + num)
            parseFloat(carac2)
            parseFloat(carac)
            result = carac / carac2
            document.getElementById('result').innerHTML = (result) 
        }
    }
}

