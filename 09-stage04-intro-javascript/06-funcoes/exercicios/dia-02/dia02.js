/*
    ### 🟢 Dia 2 Básico

    1. Crie uma função que soma dois números
    2. Crie uma função que retorna uma string com seu nome completo.
    3. Crie uma função que retorna `true` se um número for maior que 10, senão `false`.
    4. Crie uma função que imprime "Olá, mundo!".

    ### 🟡 Dia 2 Intermediário

    1. Crie uma função que calcula a média de três notas
    2. Crie uma função que recebe um número e retorna se é par ou ímpar.
    3. Crie uma função que recebe uma string e retorna o número de caracteres.

    ### 🔴 Dia 2 Avançado

    1. Crie uma função que recebe uma string e retorna a mesma invertida
    2. Crie uma função que formata uma data no estilo "dd/mm/yyyy".
    3. Crie uma função que remove os espaços em branco de uma string e retorna o resultado.
*/

console.log('--- Resultados básicos dia 02 ---')
//1 
let numero1 = 5
let numero2 = 10

const somaNumeros = () => {
    let soma = numero1 + numero2 

    console.log(soma)
    return soma;
}

somaNumeros()

//2 
let meuNome = 'Tiago Gonçalves Figueira'

const mostraNome = () => {
    let nome = meuNome
    console.log(nome)
    return nome
}

mostraNome()

//3
let numero = 75

const validaNumero = () => {
    let number = numero

    if(number > 10) {
        console.log(false)
        return false
    } else {
        console.log(true)
        return true
    }
    cons
}

validaNumero()

console.log('--- Fim Resultados básicos dia 02 ---')

console.log('--- Resultados intermediários dia 02 ---')
// 1
let nota1 = 2.5
let nota2 = 9
let nota3 = 6.5

const validaMedias = () => {
    let media = (nota1 + nota2 + nota3) / 3
    if(media >= 8) {
        console.log(`Passou de ano, sua média final é: ${media}`)
    } else if(media >=6) {
        console.log(`Você está em recuperação, sua média final é: ${media}`)
    } else {
        console.log(`Você foi reprovado, sua média final é: ${media}`)
    }

}

validaMedias()

// 2
// let numeroParOuImpar = 3

// const validaParOuImpar = () => {
//     let validador = numeroParOuImpar

//     if(validador)
// }

// 3

let validaQuantString = 'Tiago Gonçalves Figueira'

const validaString = () => {
    let validaTexto = validaQuantString

    console.log(validaTexto.length)
}

validaString()


console.log('--- Fim Resultados intermediários dia 02 ---')

console.log('--- Resultados avançados dia 02 ---')
// 1

// 2

// 3

console.log('--- Fim Resultados avançados dia 02 ---')