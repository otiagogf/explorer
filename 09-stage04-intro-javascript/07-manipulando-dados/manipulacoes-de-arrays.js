// Manipulando strings e números

let techs = ['html', 'css', 'js']
console.log(`O array original é assim: ${techs}`)

// adicionar item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// Remover do final
// techs.pop()
// removeu o nodejs

// Remover do começo
// techs.shift()
// removeu o sql

// pegar somente alguns elementos do array
// console.log(techs.slice(1,3))

// remover 1 ou mais itens em qualquer posição do array
// primero argumento é a posição do array e o segundo é a quantidade de itens a serem removidos
techs.splice(1, 1)
// ou 
// techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)

// Se quiser remover
techs.splice(index, 1)

console.log(techs)