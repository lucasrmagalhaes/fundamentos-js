// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// 0 => false
// 1 => true

console.log(0 == false); // true
console.log("" == false); // true
console.log(1 == true); // true

// null => vazio ou nada
// undefined

let minhaVar;
let varNull = null;

console.log(typeof minhaVar); // undefined
console.log(typeof varNull); // object