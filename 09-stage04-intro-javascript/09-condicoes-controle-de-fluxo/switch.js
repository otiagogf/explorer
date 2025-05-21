// switch

let expression = ''

switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('moiou')
        break
}


function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
    }

    return result
}

console.log(calculate(5, '+', 5))
console.log(calculate(5, '-', 5))
console.log(calculate(5, '*', 5))
console.log(calculate(5, '/', 5))