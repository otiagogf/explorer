/* 
    * Array
        * Uma lista
        * Agrupamento de dado
        
        ["Tiago", 31]


*/

/*
 * at
 * Retorna o item na posição indicada, aceita índices negativos.
 */
console.log([10, 20, 30].at(1));     // 20
console.log([10, 20, 30].at(-1));    // 30
console.log([].at(0));               // undefined

/*
 * concat
 * Junta dois ou mais arrays e retorna um novo.
 */
console.log([1, 2].concat([3, 4]));  // [1, 2, 3, 4]
console.log([].concat([1], [2, 3])); // [1, 2, 3]
console.log(['a'].concat('b'));     // ['a', 'b']

/*
 * copyWithin
 * Copia parte do array para outra posição dentro do mesmo array.
 */
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));   // [4, 5, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(1, 2, 4)); // [1, 3, 4, 4, 5]
console.log([1, 2, 3].copyWithin(0, 1));         // [2, 3, 3]

/*
 * entries
 * Retorna um iterador de pares [índice, valor].
 */
for (const [i, v] of ['a', 'b'].entries()) {
  console.log(i, v); // 0 'a' \n 1 'b'
}
console.log([...['x', 'y'].entries()]); // [[0, 'x'], [1, 'y']]
console.log(Array.from(['m', 'n'].entries())); // [[0, 'm'], [1, 'n']]

/*
 * every
 * Verifica se todos os elementos satisfazem a condição.
 */
console.log([2, 4, 6].every(n => n % 2 === 0));  // true
console.log([1, 2, 3].every(n => n > 0));        // true
console.log([1, -1, 3].every(n => n > 0));       // false

/*
 * fill
 * Preenche o array com um valor.
 */
console.log([1, 2, 3].fill(0));         // [0, 0, 0]
console.log([4, 5, 6].fill(9, 1));      // [4, 9, 9]
console.log(new Array(3).fill('x'));   // ['x', 'x', 'x']

/*
 * filter
 * Retorna um novo array com os elementos que passaram no teste.
 */
console.log([1, 2, 3, 4].filter(n => n % 2 === 0)); // [2, 4]
console.log([10, 5, 0].filter(n => n > 0));         // [10, 5]
console.log(['a', '', 'b'].filter(Boolean));        // ['a', 'b']

/*
 * find
 * Retorna o primeiro valor que passa no teste.
 */
console.log([4, 6, 8].find(n => n > 5));            // 6
console.log([1, 2, 3].find(n => n > 10));           // undefined
console.log(['a', 'b'].find(c => c === 'b'));       // 'b'

/*
 * findIndex
 * Retorna o índice do primeiro item que passa no teste.
 */
console.log([1, 3, 5].findIndex(n => n > 2));       // 1
console.log([1, 3, 5].findIndex(n => n > 10));      // -1
console.log(['a', 'b'].findIndex(c => c === 'b'));  // 1

/*
 * findLast
 * Retorna o último valor que passa no teste.
 */
console.log([1, 2, 3, 4].findLast(n => n % 2 === 0)); // 4
console.log([1, 3, 5].findLast(n => n > 10));         // undefined
console.log(['a', 'b', 'c'].findLast(c => c !== 'a')); // 'c'

/*
 * findLastIndex
 * Índice do último item que passa no teste.
 */
console.log([1, 2, 3, 4].findLastIndex(n => n % 2 === 0)); // 3
console.log([1, 3].findLastIndex(n => n > 10));            // -1
console.log(['a', 'b', 'c'].findLastIndex(c => c !== 'a')); // 2

/*
 * flat
 * Achata o array (1 nível por padrão).
 */
console.log([1, [2, 3]].flat());            // [1, 2, 3]
console.log([1, [2, [3]]].flat(2));         // [1, 2, 3]
console.log([[['a']]].flat(3));             // ['a']

/*
 * flatMap
 * Mapeia e achata um nível.
 */
console.log([1, 2].flatMap(n => [n, n * 2])); // [1, 2, 2, 4]
console.log(['x', 'y'].flatMap(c => [c, c])); // ['x', 'x', 'y', 'y']
console.log([1, 2, 3].flatMap(n => []));      // []

/*
 * forEach
 * Executa uma função para cada item.
 */
[1, 2, 3].forEach(n => console.log(n));  // 1 2 3
['a', 'b'].forEach((v, i) => console.log(i, v)); // 0 'a' 1 'b'
[true, false].forEach(b => console.log(!b));

/*
 * includes
 * Verifica se um valor está presente no array.
 */
console.log([1, 2, 3].includes(2));      // true
console.log(['a', 'b'].includes('c'));  // false
console.log([NaN].includes(NaN));       // true

/*
 * indexOf
 * Índice da primeira ocorrência de um valor.
 */
console.log(['a', 'b', 'a'].indexOf('a'));   // 0
console.log(['a', 'b'].indexOf('z'));        // -1
console.log([1, 2, 3].indexOf(3));           // 2

/*
 * join
 * Junta os elementos em uma string.
 */
console.log([1, 2, 3].join());          // "1,2,3"
console.log(['a', 'b'].join('-'));     // "a-b"
console.log([true, false].join('|'));  // "true|false"

/*
 * keys
 * Retorna um iterador com os índices.
 */
console.log([...['a', 'b'].keys()]);   // [0, 1]
console.log([...Array(3).keys()]);     // [0, 1, 2]
console.log(Array.from(['x'].keys())); // [0]

/*
 * map
 * Retorna um novo array com os resultados da função.
 */
console.log([1, 2, 3].map(n => n * 2)); // [2, 4, 6]
console.log(['a', 'b'].map(c => c.toUpperCase())); // ['A', 'B']
console.log([true, false].map(b => !b)); // [false, true]

/*
 * pop
 * Remove e retorna o último item.
 */
const a1 = [1, 2, 3];
console.log(a1.pop());                // 3
console.log(a1);                      // [1, 2]
console.log([].pop());                // undefined

/*
 * push
 * Adiciona item(s) ao fim e retorna novo comprimento.
 */
const a2 = [1, 2];
console.log(a2.push(3));              // 3
console.log(a2);                      // [1, 2, 3]
console.log([].push('x', 'y'));       // 2

/*
 * reduce
 * Reduz o array a um único valor.
 */
console.log([1, 2, 3].reduce((a, b) => a + b)); // 6
console.log([2, 3].reduce((a, b) => a * b));    // 6
console.log(['a', 'b'].reduce((a, b) => a + b)); // "ab"

/*
 * reduceRight
 * Igual ao reduce, mas da direita para a esquerda.
 */
console.log([1, 2, 3].reduceRight((a, b) => a - b)); // -1
console.log(['a', 'b'].reduceRight((a, b) => a + b)); // "ba"
console.log([10, 5].reduceRight((a, b) => a / b)); // 2

/*
 * reverse
 * Inverte o array original.
 */
const a3 = [1, 2, 3];
console.log(a3.reverse());            // [3, 2, 1]
console.log(['a', 'b'].reverse());    // ['b', 'a']
console.log([true, false].reverse()); // [false, true]

/*
 * shift
 * Remove o primeiro item e retorna ele.
 */
const a4 = [1, 2];
console.log(a4.shift());              // 1
console.log(a4);                      // [2]
console.log([].shift());              // undefined

/*
 * slice
 * Retorna uma cópia parcial do array.
 */
console.log([1, 2, 3].slice(1));      // [2, 3]
console.log([1, 2, 3].slice(0, 2));   // [1, 2]
console.log([1, 2, 3].slice(-2));     // [2, 3]

/*
 * some
 * Verifica se ao menos um item passa no teste.
 */
console.log([1, 2, 3].some(n => n > 2)); // true
console.log([1, 2].some(n => n < 0));    // false
console.log([].some(n => true));         // false

/*
 * sort
 * Ordena os elementos do array.
 */
console.log([3, 1, 2].sort());       // [1, 2, 3]
console.log(['b', 'a'].sort());     // ['a', 'b']
console.log([10, 2].sort((a, b) => a - b)); // [2, 10]

/*
 * splice
 * Altera o array (remove/insere).
 */
const a5 = [1, 2, 3];
console.log(a5.splice(1, 1));        // [2]
console.log(a5);                     // [1, 3]
const a6 = [10, 20];
a6.splice(1, 0, 15);                 // []
console.log(a6);                     // [10, 15, 20]

/*
 * toLocaleString
 * Converte array para string formatada conforme localidade.
 */
console.log([1000, 2000].toLocaleString('en-US')); // "1,000,2,000"
console.log([1000, 2000].toLocaleString('pt-BR')); // "1.000,2.000"
console.log(['a', 'b'].toLocaleString());          // "a,b"

/*
 * toString
 * Converte array em string simples.
 */
console.log([1, 2, 3].toString());   // "1,2,3"
console.log(['a', 'b'].toString()); // "a,b"
console.log([true, false].toString()); // "true,false"

/*
 * unshift
 * Adiciona item(s) no início do array.
 */
const a7 = [2, 3];
console.log(a7.unshift(1));         // 3
console.log(a7);                    // [1, 2, 3]
console.log([].unshift('x'));       // 1

/*
 * values
 * Retorna iterador dos valores.
 */
for (const v of ['a', 'b'].values()) {
  console.log(v);                   // 'a' 'b'
}
console.log([...['x', 'y'].values()]); // ['x', 'y']
console.log(Array.from(['z'].values())); // ['z']

// ===========================
// MÉTODOS ESTÁTICOS
// ===========================

/*
 * Array.from
 * Cria um array a partir de algo iterável.
 */
console.log(Array.from('abc'));     // ['a', 'b', 'c']
console.log(Array.from([1, 2], x => x * 2)); // [2, 4]
console.log(Array.from({ length: 3 }, (_, i) => i)); // [0, 1, 2]

/*
 * Array.isArray
 * Verifica se o valor é um array.
 */
console.log(Array.isArray([]));         // true
console.log(Array.isArray({}));         // false
console.log(Array.isArray('abc'));      // false

/*
 * Array.of
 * Cria um novo array com os argumentos dados.
 */
console.log(Array.of(1, 2, 3));          // [1, 2, 3]
console.log(Array.of('a'));             // ['a']
console.log(Array.of());                // []