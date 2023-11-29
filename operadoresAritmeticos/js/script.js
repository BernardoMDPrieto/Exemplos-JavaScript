let x,y,resultSoma,resultSubtracao,resultMultiplicacao,resultDivisao
x = 9
y = 3
resultSoma = x + y
resultSubtracao = x - y
resultMultiplicacao = x * y
resultDivisao = x / y
function acao(){
document.getElementById('soma').innerHTML= x + " + " + y + " = " + resultSoma
document.getElementById('subtracao').innerHTML= x + " - " + y + " = " + resultSubtracao
document.getElementById('divisao').innerHTML= x + " / " + y + " = " + resultDivisao
document.getElementById('multiplicacao').innerHTML= x + " * " + y + " = " + resultMultiplicacao
}
