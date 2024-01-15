var conta = {}
var num1, num2
conta = {operando: 4.5}

num1 = prompt(`Digite um numero:`);
num2 = prompt(`Digite outro número :`);



function trocaVal1(){
    conta.trocaVal1 = prompt(`Digite um número (denovo)`);  
    num1 = conta.trocaVal1 
}

function trocaVal2(){
    conta.trocaVal2 = prompt(`Digite um número (denovo)`); 
    num2 = conta.trocaVal2  
}


function soma(){
    conta.soma = alert(`${num1} + ${num2} =  ${parseFloat(num1) + parseFloat(num2)}`);   
}

function sub(){
    conta.sub = alert(`${num1} - ${num2} = ${ num1 - num2}`);
}

function vezes(){
    conta.vez = alert(`${num1} x ${num2} = ${ num1 * num2}`);   
}

function div(){
    conta.div = alert(`${num1} / ${num2} = ${ num1 / num2}`);   
}

function pot(){
    conta.rad = alert(`${num1} ^ ${num2} = ${Math.pow(num1, num2)}`)
}
function rad(){
    conta.rad = alert(`${num1} // ${num2} = ${Math.sqrt(num1, 1/num2)}`)
}