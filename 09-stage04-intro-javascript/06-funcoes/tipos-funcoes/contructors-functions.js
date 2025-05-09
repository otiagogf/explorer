/* 
    - expressão new - utilizada na frente da função, que retorna automaticamente um objeto
    - criar um novo objeto - new Person() retorna automaticamente um novo objeto a ser instanciado e manipulado
    - this é o formato de manipularmos os dados de atributos e métodos do objeto
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando";
    }
}
const tiago = new Person("Tiago")
console.log(tiago.walk())
const joao = new Person("João")
console.log(joao.walk())