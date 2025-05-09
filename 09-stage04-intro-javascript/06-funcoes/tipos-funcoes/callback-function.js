// São funções que tem como objetivo retornar algo, neste caso podemos chamar até mesmo uma outra função: 

function sayMyName(name) {
    console.log('Antes da callback')
    name()
    console.log('Depois da callback')
}

// sayMyName('Tiago');
// sayMyName(2);
// sayMyName({name : 'Tiago'});
 sayMyName(
    () => {
        console.log('estou em uma callback')
    }
);