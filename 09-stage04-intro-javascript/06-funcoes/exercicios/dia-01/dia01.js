/* 
    Dia 01 - Exercícios

    ### 🟢 Dia 1 Básico

    1. Declare variáveis com os seguintes tipos: string, number, boolean, null e undefined
    2. Use `typeof` para exibir o tipo de cada variável
    3. Converta uma string para número usando `Number()` e `parseInt()`
    4. Crie uma variável com `const` e tente reatribuir um valor a ela. O que acontece?

    ### 🟡 Dia 1 Intermediário

    1. Crie um objeto com três propriedades: nome, idade e ativo (boolean)
    2. Crie um array com cinco números e exiba o terceiro elemento
    3. Inverta os valores de duas variáveis usando uma variável temporária

    ### 🔴 Dia 1 Avançado

    1. Crie um objeto representando um produto com nome, preço e quantidade. Exiba o valor total (preço × quantidade)
    2. Simule um formulário com três variáveis: nome, email e senha. Valide se os campos não estão vazios
    3. Crie uma função que recebe dois valores de tipos diferentes (ex: string e número) e retorna o tipo da soma dos dois
*/

/* 01 */
let umaString = 'String'
let umNumber = 15
let umBoolean = true
let umNull = null
let umUndefined = undefined

console.log('--------- Resultado 01 Básico ---------')
console.log(typeof umaString)
console.log(typeof umNumber)
console.log(typeof umBoolean)
console.log(typeof umNull)
console.log(typeof umUndefined)

let convertendoString = '155'
console.log('Convertendo com Number():' + Number(convertendoString))
let convertendoString2 = '155'
console.log('Convertendo com parseInt():' + parseInt(convertendoString))

const tenteAlterar = 'Não dá...'
// tenteAlterar = 'Não deu...'

/* Retornou: Assignment to constant variable. */

console.log('--------- Resultado 01 Básico ---------')



console.log('--------- Resultado 01 Intermediário ---------')
let umObjeto = {
    nome: 'Tiago', idade: 31, ativo: true
}
console.log(umObjeto)

let umArray = [700, 15, 25, 64, 10000]
console.log(umArray[2])

console.log('--------- Resultado 01 Intermediário ---------')

console.log('--------- Resultado 01 Avançado ---------')
let outroObjeto = {
    nome: 'Melância', preco: 15.99, quantidade: 50
}
console.log(`O Produto ${outroObjeto.nome} está no valor de R$ ${outroObjeto.preco * outroObjeto.quantidade}`)



const validaSoma = () => {
    let outraString = '75'
    let outroNumber = 40

    let tipo = outraString + outroNumber
    console.log(typeof tipo)
    return (tipo)
}

validaSoma()


console.log('--------- Resultado 01 Avançado ---------')