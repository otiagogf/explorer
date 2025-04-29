// "" Aspas duplas
// '' Aspas simples
// `` template literals ou template strings

console.log("Aspas duplas");
console.log('Asplas simples');
console.log(`Aspas simples ${1+1}`);

// Métodos String

/* 
    toUpperCase() - Converte todos os caracteres da string para letras maiúsculas.
*/
console.log('javascript'.toUpperCase()); // 'JAVASCRIPT'
console.log('abc'.toUpperCase());         // 'ABC'
console.log('Olá Mundo'.toUpperCase());   // 'OLÁ MUNDO'

/* 
    toLowerCase() - Converte todos os caracteres da string para letras minúsculas.
*/
console.log('JAVASCRIPT'.toLowerCase()); // 'javascript'
console.log('ABC'.toLowerCase());        // 'abc'
console.log('Olá Mundo'.toLowerCase());  // 'olá mundo'


/* 
    trim() - Remove espaços em branco do início e do fim da string.
*/
console.log('  texto  '.trim());  // 'texto'
console.log('\n\nabc\n'.trim());  // 'abc'
console.log('   teste'.trim());   // 'teste'

/* 
    trimStart() - Remove espaços em branco apenas do início da string.
*/
console.log('   exemplo'.trimStart()); // 'exemplo'
console.log('\n\nabc'.trimStart());    // 'abc'
console.log('  texto final  '.trimStart()); // 'texto final  '

/* 
    trimEnd() - Remove espaços em branco apenas do final da string.
*/
console.log('exemplo   '.trimEnd()); // 'exemplo'
console.log('abc\n\n'.trimEnd());    // 'abc'
console.log('  começo e fim   '.trimEnd()); // '  começo e fim'

/* 
    padStart() - Preenche o início da string até atingir o tamanho desejado.
*/
console.log('5'.padStart(3, '0'));        // '005'
console.log('abc'.padStart(6, '-'));       // '---abc'
console.log('42'.padStart(5, '*'));        // '***42'

/* 
    padEnd() - Preenche o final da string até atingir o tamanho desejado.
*/
console.log('5'.padEnd(3, '0'));        // '500'
console.log('abc'.padEnd(6, '-'));       // 'abc---'
console.log('42'.padEnd(5, '*'));        // '42***'

/* 
    slice() - Extrai uma parte da string, sem modificar a original.
*/
console.log('abcdef'.slice(2, 4));    // 'cd'
console.log('javascript'.slice(4));   // 'script'
console.log('abcdef'.slice(-3));      // 'def'

/* 
    substring() - Extrai caracteres entre dois índices (não aceita negativos).
*/
console.log('abcdef'.substring(2, 5));  // 'cde'
console.log('abcdef'.substring(4, 2));  // 'cd'
console.log('abcdef'.substring(3));     // 'def'

/*
    substr() - Extrai parte da string a partir da posição inicial e quantidade de caracteres. (Obsoleto, mas ainda funciona.)
*/
console.log('abcdef'.substr(2, 3));  // 'cde'
console.log('abcdef'.substr(0, 2));  // 'ab'
console.log('abcdef'.substr(-2));    // 'ef'

/*
    indexOff() - Retorna o índice da primeira ocorrência da substring.
*/
console.log('banana'.indexOf('na'));    // 2
console.log('javascript'.indexOf('script')); // 4
console.log('abcabc'.indexOf('c'));     // 2

/*
    lastIndexOff() - Retorna o índice da última ocorrência da substring.
*/
console.log('banana'.lastIndexOf('na'));    // 4
console.log('javascript'.lastIndexOf('a')); // 3
console.log('abcabc'.lastIndexOf('c'));     // 5

/*
    includes() - Verifica se a substring existe dentro da string.
*/
console.log('javascript'.includes('script'));  // true
console.log('abc'.includes('d'));               // false
console.log('hello world'.includes('world'));   // true

/*
    startsWith() - Verifica se a string começa com a substring fornecida.
*/
console.log('javascript'.startsWith('java')); // true
console.log('abc'.startsWith('a'));            // true
console.log('hello'.startsWith('he'));         // true

/*
    endsWith() - Verifica se a string termina com a substring fornecida.
*/
console.log('javascript'.endsWith('script')); // true
console.log('abc'.endsWith('c'));              // true
console.log('hello'.endsWith('lo'));           // true

/*
    replace() - Substitui a primeira ocorrência de uma substring por outra.
*/
console.log('Olá Mundo'.replace('Mundo', 'Amigo')); // 'Olá Amigo'
console.log('abcabc'.replace('a', 'x'));            // 'xbcabc'
console.log('banana'.replace('na', 'ña'));          // 'bañana'

/*
    replaceAll() - Substitui todas as ocorrências de uma substring por outra.
*/
console.log('abcabc'.replaceAll('a', 'x'));    // 'xbcxbc'
console.log('123-123-123'.replaceAll('-', ':')); // '123:123:123'
console.log('aaaa'.replaceAll('a', 'b'));      // 'bbbb'


/* 
    split() - Divide a string em partes, transformando em array, baseado num separador.
*/
console.log('a,b,c'.split(','));      // ['a', 'b', 'c']
console.log('um dois três'.split(' ')); // ['um', 'dois', 'três']
console.log('abc'.split(''));          // ['a', 'b', 'c']

/* 
    concat() - Junta duas ou mais strings em uma só.
*/
console.log('Hello'.concat(' World'));   // 'Hello World'
console.log('abc'.concat('123'));        // 'abc123'
console.log('Olá'.concat(' ', 'Mundo')); // 'Olá Mundo'

/* 
    repeat() - Repete a string um número definido de vezes.
*/
console.log('a'.repeat(3));    // 'aaa'
console.log('abc'.repeat(2));  // 'abcabc'
console.log('hi'.repeat(4));   // 'hihihihi'

/* 
    charAt() - Retorna o caractere no índice especificado.
*/
console.log('abc'.charAt(0));   // 'a'
console.log('abc'.charAt(2));   // 'c'
console.log('javascript'.charAt(4)); // 's'

/* 
    charCodeAt() - Retorna o código Unicode do caractere no índice especificado.
*/
console.log('ABC'.charCodeAt(0));  // 65
console.log('abc'.charCodeAt(1));  // 98
console.log('Z'.charCodeAt(0));    // 90

/* 
    localeCompare() - Compara duas strings seguindo regras locais (idioma).
*/
console.log('a'.localeCompare('b'));   // -1
console.log('b'.localeCompare('a'));   // 1
console.log('a'.localeCompare('a'));   // 0

/* 
    match() - Retorna correspondências com regex na string.
*/
console.log('abc123'.match(/\d+/));  // ['123']
console.log('hello123world456'.match(/\d+/)); // ['123']
console.log('sem números'.match(/\d+/)); // null

/* 
    matchAll() - Retorna todas as correspondências regex como iterador.
*/
[...('a1b2c3'.matchAll(/\d/g))].forEach(m => console.log(m[0])); // 1, 2, 3
[...('test123test456'.matchAll(/\d+/g))]; // [['123'], ['456']]
Array.from('a1b2c3'.matchAll(/\d/g)).map(m => m[0]); // ['1', '2', '3']


/* 
    search() - Procura índice da primeira correspondência regex.
*/
console.log('abc123'.search(/\d/)); // 3
console.log('sem números'.search(/\d/)); // -1
console.log('123abc'.search(/[a-z]/)); // 3


/* 
    normalize() - Normaliza a representação Unicode da string.
*/
console.log('é'.normalize('NFD')); // 'e' + '́' (e + acento separado)
console.log('café'.normalize('NFC')); // 'café' (forma composta)
console.log('coração'.normalize('NFD').replace(/\p{Diacritic}/gu, '')); // 'coracao'