/* 
    Number
    * números

    inteiros - int / 33
    reais - float / 12.5
    NaN / Not a Number
    Infinity / infinito
*/

/*
 * toExponential
 * Converte o número para notação exponencial (científica).
 */
console.log((123456).toExponential()); // "1.23456e+5"
console.log((1.23).toExponential(1)); // "1.2e+0"
console.log((0.000123).toExponential(2)); // "1.23e-4"

/*
 * toFixed
 * Formata o número com um número fixo de casas decimais.
 */
console.log((3.14159).toFixed(2)); // "3.14"
console.log((1.005).toFixed(2)); // "1.01"
console.log((10).toFixed(0)); // "10"

/*
 * toLocaleString
 * Converte o número para uma string formatada conforme a localidade.
 */
console.log((1234567.89).toLocaleString()); // "1,234,567.89" (en-US)
console.log((1234567.89).toLocaleString("de-DE")); // "1.234.567,89"
console.log((1234567.89).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })); // "R$ 1.234.567,89"

/*
 * toPrecision
 * Formata o número com uma precisão total de dígitos.
 */
console.log((123.456).toPrecision(5)); // "123.46"
console.log((0.000123).toPrecision(2)); // "0.00012"
console.log((98765.4321).toPrecision(6)); // "98765.4"

/*
 * toString
 * Converte o número para string, podendo definir a base (radix).
 */
console.log((255).toString()); // "255"
console.log((255).toString(16)); // "ff"
console.log((10).toString(2)); // "1010"

/*
 * valueOf
 * Retorna o valor primitivo do objeto Number.
 */
console.log((42).valueOf()); // 42
console.log(new Number(7).valueOf()); // 7
console.log((0).valueOf()); // 0

// ===========================
// MÉTODOS ESTÁTICOS
// ===========================

/*
 * Number.isFinite
 * Verifica se o valor é um número finito (não Infinity ou NaN).
 */
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("123")); // false

/*
 * Number.isInteger
 * Verifica se o valor é um número inteiro.
 */
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger("10")); // false

/*
 * Number.isNaN
 * Verifica se o valor é exatamente NaN (não é convertido como em isNaN global).
 */
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false

/*
 * Number.isSafeInteger
 * Verifica se o valor é um inteiro seguro (entre -(2^53 - 1) e 2^53 - 1).
 */
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(3.14)); // false

/*
 * Number.parseFloat
 * Analisa uma string e retorna um número de ponto flutuante.
 */
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("100px")); // 100
console.log(Number.parseFloat("abc")); // NaN

/*
 * Number.parseInt
 * Analisa uma string e retorna um número inteiro.
 */
console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("101", 2)); // 5
console.log(Number.parseInt("10.5")); // 10

/*
 * Number.prototype[@@toPrimitive]
 * Método interno que define como o objeto é convertido para primitivo.
 * (Usado indiretamente pelo JS, não se chama diretamente)
 */
const num = new Number(10);
console.log(`${num}`); // "10" (usa toPrimitive implicitamente)
console.log(num + 5); // 15 (mesma coisa)
console.log(String(num)); // "10"

