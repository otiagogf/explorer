/* 
    Scope 
    * Determina a visibilidade de alguma variável no JS
*/

// Block Statement
/*
    Vamos iniciar um bloco
    {
        bloco de código
    }

    o bloco, também criará um novo escopo, chamado de block-scoped
*/


// Var é global e, também local
// hoisting

console.log('> Existe x antes do bloco?', x) 
// undefined, pois a atribuição está em um bloco fechado

{
    var x = 0;
}

console.log('> Existe x depois do bloco?', x)