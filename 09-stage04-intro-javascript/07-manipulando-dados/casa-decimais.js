// Manipulando strings e números

// Transformar um número quebrado com 2 casas decimais e trocar por ponto e vírgula

let number = 4333315656126.181650654156
console.log(number.toFixed(2).replace(".", ","))

// O resultado acima transforma o número em uma string, mas não é possível revertermos em number, pois a vírgula não faz parte do objeto number
// Retorna NaN
console.log(Number(number.toFixed(2).replace(".", ",")))