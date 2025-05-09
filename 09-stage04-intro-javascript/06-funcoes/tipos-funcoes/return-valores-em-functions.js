// Functions sempre dão um retorno após o fim da execução das mesmas, então se não colocarmos um return com algum valor dentro da mesma, na hora de buscarmos o resultado ou imprimirmos em tela, vai retornar “UNDEFINED”.

// - Um exemplo de function com return:

const sum = function (number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 25;

console.log(`o número 1 é: ${number1}`);
console.log(`o número 2 é: ${number2}`);

console.log(`a soma é: ${sum(number1, number2)}`);

//Um exemplo de function sem retorno:

const sum2 = function (number3, number4) {
    console.log(number3 + number4)
}

let number3 = 43;
let number4 = 52;

sum2(number3, number4)

console.log(`a soma é: ${sum2(number3, number4)}`);


// Terceiro exemplo

function fazerSuco(fruta1, fruta2) {
    return 'suquim de murucujá e...: ' + fruta1 + ' com ' + fruta2;
}

const copo = fazerSuco('banana', 'maça');

console.log(copo);