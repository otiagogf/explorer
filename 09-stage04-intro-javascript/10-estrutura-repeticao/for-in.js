// for..in

let person = {
    name: 'Tiago',
    age: 31,
    weigth: 115
}

for(let property in person) {
    console.log(`Propriedade: ${property}`)
    console.log(`Valor: ${person[property]}`)
}

