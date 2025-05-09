/*
    * let e const
        São locais e só funcionam no escopo onde foram criados

*/

console.log('> Existe x antes do bloco?', y);
// undefined, pois a atribuição está em um bloco fechado

{
    let y = 0;
    console.log('> Existe y ?', y);
}

console.log('> Existe x depois do bloco?', y);

const z = 1;

{
    const z = 0;
    console.log('> Existe z ?', z);
}

console.log('> Existe z depois do bloco?', z);