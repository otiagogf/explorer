/*
    *Object
        * Objeto
        * Propriedades / Atributos
        * Funcionalidades / Métodos
    
    { propriedade: "valor" }        

*/
console.log({
    name: "Tiago",
    idade: 31,
    andar: function() {
        console.log("Andando;")
    }
})

/*
 * hasOwnProperty
 * Verifica se o objeto possui a propriedade diretamente (sem herança).
 */
const obj1 = { a: 1 };
console.log(obj1.hasOwnProperty('a'));           // true
console.log(obj1.hasOwnProperty('b'));           // false
console.log({}.hasOwnProperty('toString'));      // false

/*
 * isPrototypeOf
 * Verifica se o objeto está no protótipo de outro.
 */
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog();
console.log(Animal.prototype.isPrototypeOf(dog)); // true
console.log(Dog.prototype.isPrototypeOf(dog));    // true
console.log(Object.prototype.isPrototypeOf(dog)); // true

/*
 * propertyIsEnumerable
 * Verifica se a propriedade é enumerável (aparece em for...in, etc).
 */
const obj2 = { a: 1 };
console.log(obj2.propertyIsEnumerable('a'));     // true
console.log(obj2.propertyIsEnumerable('toString')); // false
Object.defineProperty(obj2, 'hidden', { value: 42, enumerable: false });
console.log(obj2.propertyIsEnumerable('hidden')); // false

/*
 * toString
 * Retorna uma string representando o objeto.
 */
console.log({}.toString());                      // "[object Object]"
console.log([].toString());                      // ""
console.log((new Date()).toString());            // "Tue Apr 29 2025 ..." (depende da data)

/*
 * valueOf
 * Retorna o valor primitivo do objeto.
 */
const obj3 = { x: 10 };
console.log(obj3.valueOf());                     // { x: 10 }
console.log([1,2,3].valueOf());                  // [1,2,3]
console.log((new Number(5)).valueOf());          // 5

// ===========================
// MÉTODOS ESTÁTICOS (Object)
// ===========================

/*
 * Object.assign
 * Copia propriedades de objetos para outro.
 */
const target = { a: 1 };
const source = { b: 2 };
console.log(Object.assign(target, source));      // { a: 1, b: 2 }
console.log(Object.assign({}, { x: 1 }, { y: 2 })); // { x: 1, y: 2 }
console.log(Object.assign({ z: 0 }, { z: 9 }));   // { z: 9 }

/*
 * Object.create
 * Cria um novo objeto com o protótipo definido.
 */
const proto = { greet() { return "hi"; } };
const obj4 = Object.create(proto);
obj4.name = "Tiago";
console.log(obj4.greet());                       // "hi"
console.log(Object.getPrototypeOf(obj4) === proto); // true
console.log(obj4.name);                          // "Tiago"

/*
 * Object.defineProperty
 * Define ou modifica uma propriedade com configuração detalhada.
 */
const obj5 = {};
Object.defineProperty(obj5, 'a', {
  value: 42,
  writable: false,
});
console.log(obj5.a);                             // 42
obj5.a = 100;
console.log(obj5.a);                             // 42 (não muda)
console.log(Object.getOwnPropertyDescriptor(obj5, 'a'));

/*
 * Object.defineProperties
 * Define várias propriedades de uma vez.
 */
const obj6 = {};
Object.defineProperties(obj6, {
  x: { value: 10, writable: true },
  y: { value: 20, writable: false },
});
console.log(obj6.x);                             // 10
console.log(obj6.y);                             // 20
obj6.y = 99;
console.log(obj6.y);                             // 20

/*
 * Object.entries
 * Retorna array de pares [chave, valor] do objeto.
 */
const obj7 = { a: 1, b: 2 };
console.log(Object.entries(obj7));               // [["a", 1], ["b", 2]]
console.log(Object.entries({}));                 // []
console.log(Object.entries({ x: "X" }));          // [["x", "X"]]

/*
 * Object.freeze
 * Congela um objeto (torna imutável).
 */
const obj8 = { a: 1 };
Object.freeze(obj8);
obj8.a = 100;
console.log(obj8.a);                             // 1
console.log(Object.isFrozen(obj8));              // true

/*
 * Object.fromEntries
 * Converte array de pares [chave, valor] em objeto.
 */
console.log(Object.fromEntries([["a", 1], ["b", 2]]));  // { a: 1, b: 2 }
console.log(Object.fromEntries([]));                    // {}
console.log(Object.fromEntries(new Map([["x", 5]])));   // { x: 5 }

/*
 * Object.getOwnPropertyDescriptor
 * Retorna as configurações de uma propriedade.
 */
const obj9 = { x: 10 };
console.log(Object.getOwnPropertyDescriptor(obj9, 'x'));
// { value: 10, writable: true, enumerable: true, configurable: true }
Object.defineProperty(obj9, 'y', { value: 20, enumerable: false });
console.log(Object.getOwnPropertyDescriptor(obj9, 'y'));

/*
 * Object.getOwnPropertyDescriptors
 * Retorna todas as descrições de propriedades próprias.
 */
const obj10 = { a: 1, b: 2 };
console.log(Object.getOwnPropertyDescriptors(obj10));
console.log(Object.getOwnPropertyDescriptors({}));
console.log(Object.getOwnPropertyDescriptors(Object.freeze({ x: 1 })));

/*
 * Object.getOwnPropertyNames
 * Retorna um array com os nomes de todas propriedades (enumeráveis ou não).
 */
const obj11 = Object.create({}, {
  hidden: { value: 123, enumerable: false },
  visible: { value: 456, enumerable: true }
});
console.log(Object.getOwnPropertyNames(obj11)); // ["hidden", "visible"]
console.log(Object.getOwnPropertyNames({ x: 1 })); // ["x"]
console.log(Object.getOwnPropertyNames([])); // ["length"]

/*
 * Object.getOwnPropertySymbols
 * Retorna símbolos usados como chave no objeto.
 */
const sym = Symbol("id");
const obj12 = { [sym]: 123 };
console.log(Object.getOwnPropertySymbols(obj12)); // [Symbol(id)]
console.log(Object.getOwnPropertySymbols({}));    // []
console.log(Object.getOwnPropertySymbols({ a: 1 })); // []

/*
 * Object.getPrototypeOf
 * Retorna o protótipo de um objeto.
 */
const obj13 = {};
console.log(Object.getPrototypeOf(obj13));        // {}
console.log(Object.getPrototypeOf([]) === Array.prototype); // true
console.log(Object.getPrototypeOf(() => {}) === Function.prototype); // true

/*
 * Object.is
 * Compara dois valores como ===, mas trata NaN e -0/+0 corretamente.
 */
console.log(Object.is(NaN, NaN));                 // true
console.log(Object.is(0, -0));                    // false
console.log(Object.is(123, 123));                 // true

/*
 * Object.isExtensible
 * Verifica se novas propriedades podem ser adicionadas.
 */
const obj14 = {};
console.log(Object.isExtensible(obj14));          // true
Object.preventExtensions(obj14);
console.log(Object.isExtensible(obj14));          // false
obj14.x = 10;
console.log(obj14.x);                             // undefined

/*
 * Object.isFrozen
 * Verifica se o objeto está congelado.
 */
const obj15 = Object.freeze({ a: 1 });
console.log(Object.isFrozen(obj15));              // true
console.log(Object.isFrozen({}));                 // false
console.log(Object.isFrozen(Object.preventExtensions({}))); // false

/*
 * Object.isSealed
 * Verifica se o objeto está selado (não pode adicionar/remover propriedades).
 */
const obj16 = Object.seal({ x: 1 });
console.log(Object.isSealed(obj16));              // true
console.log(Object.isSealed({}));                 // false
console.log(Object.isSealed(Object.preventExtensions({}))); // false

/*
 * Object.keys
 * Retorna array com as chaves enumeráveis.
 */
const obj17 = { a: 1, b: 2 };
console.log(Object.keys(obj17));                  // ["a", "b"]
console.log(Object.keys({}));                     // []
console.log(Object.keys(Object.create({ a: 1 }, { b: { value: 2, enumerable: true } }))); // ["b"]

/*
 * Object.preventExtensions
 * Impede que o objeto ganhe novas propriedades.
 */
const obj18 = {};
Object.preventExtensions(obj18);
obj18.x = 10;
console.log(obj18.x);                             // undefined
console.log(Object.isExtensible(obj18));          // false
console.log(Object.getPrototypeOf(obj18) === Object.prototype); // true

/*
 * Object.seal
 * Sela um objeto (não permite adicionar ou remover propriedades).
 */
const obj19 = { a: 1 };
Object.seal(obj19);
obj19.b = 2;
delete obj19.a;
console.log(obj19);                               // { a: 1 }
console.log(Object.isSealed(obj19));              // true

/*
 * Object.values
 * Retorna array com os valores das propriedades enumeráveis.
 */
const obj20 = { x: 1, y: 2 };
console.log(Object.values(obj20));                // [1, 2]
console.log(Object.values({}));                   // []
console.log(Object.values({ a: "A", b: "B" }));   // ["A", "B"]