// declaração de função

function minhaFuncao(param) {
    // bloco codigo
}

// minhaFuncao("param")

// expressão de função

// const soma = function(num1, num2) {
    // return num1 + num2;
// }

// console.log(soma(3,4))

// diferença principal: HOISTING
// funções e var sar elevados "listados" no topo

console.log(apresentar()) // Olá

function apresentar(){
    return "Olá";
}

const soma = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 1)) // 2