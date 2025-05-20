let pao = true
let queijo = true 

// Exemplo Café top
const niceBreakFast = pao || queijo ? 'Café top' : 'Café podre'

console.log(niceBreakFast)
// Café top

pao = true
queijo = false 

const niceBreakFast2 = pao && queijo ? 'Café top' : 'Café podre'

console.log(niceBreakFast2)
// Café podre

// Exemplo Maior de 18
let age = 16

const canDrive = age >= 18 ? 'Can drive' : 'Cannot drive'
console.log(canDrive)