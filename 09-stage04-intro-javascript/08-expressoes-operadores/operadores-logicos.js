let pao = true
let queijo = true 

// AND &&
console.log(pao && queijo)
// true

pao = false
queijo = true 
console.log(pao && queijo)
// false

// OR ||
console.log(pao || queijo)
// true

pao = false
queijo = true 
console.log(pao || queijo)
// true

pao = false
queijo = false 
console.log(pao || queijo)
// false

// NOT !
console.log(!pao)
// true