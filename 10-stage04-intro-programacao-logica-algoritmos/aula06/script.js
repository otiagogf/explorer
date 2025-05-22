/* 
    Capture 10 itens para compor a lista de um supermercado.

    Após capturar 10 items, imprima-os, separando por vírgula.
*/


let lista = []
let itemLista

for(let i = 0; i < 10; i++) {
    itemLista = prompt(`Insira o item ${i+1}º na lista: `)
    lista[i] = itemLista
}
alert(lista)