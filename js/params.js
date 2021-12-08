// parâmetros função

// console.log(soma(5, 5))
// console.log(soma(565, 52))
// console.log(soma(85, 55))
// console.log(soma(-85, 58))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Mu nome é ${nome} e minha  idade é ${idade}`
}

// console.log(nomeIdade("Lucas", 29))

function soma(num1, num2){
    return num1 +num2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5))) // 9 * 1 = 9