/* 

    Capturar 2 números
    e fazer as operações matemáticas
    de soma, subtração, multiplicação,
    divisão e resto da divisão.
*/

alert('Vamos calcular números')

let num1 = prompt('Informe o primeiro número')
let num2 = prompt('Informe o segundo número')

num1 = Number(num1)
num2 = Number(num2)

const sum = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
const res = num1 % num2

alert(`Soma: ${sum}`)
alert(`Subtração: ${sub}`)
alert(`Multiplicação: ${mult}`)
alert(`Divisão: ${div}`)
alert(`Resto: ${res}`)