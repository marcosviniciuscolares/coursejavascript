const numeros = [1, 3, 30, 40, 90, 100, 10];
const totalNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);
//console.log(totalNumeros);

const numeros2 = [1, 3, 30, 40, 90, 100, 10];
const numerosPares = numeros2.reduce(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador.push(valor);
    }
    return acumulador;
}, []);
//console.log(numerosPares);

const numeros3 = [1, 3, 30, 40, 90, 100, 10];
const numerosEmDobro = numeros2.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []);
//console.log(numerosEmDobro);

const pessoas = [
    {nome: "Pedro", idade: 10},
    {nome: "Jurandir ", idade: 32},
    {nome: "Marcos", idade: 18},
    {nome: "João", idade: 20}
];
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade){
        return acumulador;
    } else {
        return valor;
    }
});
//console.log(pessoaMaisVelha);