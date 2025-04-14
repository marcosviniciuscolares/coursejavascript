const pessoas = [
    {nome: "Pedro", idade: 10},
    {nome: "Jurandir ", idade: 32},
    {nome: "Marcos", idade: 18},
    {nome: "João", idade: 20}
];

const numeros = [2, 4, 6, 8];
const tudoJunto = numeros.map(function(valor, indice, array){
    return valor;
});
console.log(tudoJunto);
const tudoJuntoReduzido = numeros.map(valor => valor);
console.log(tudoJuntoReduzido);

const sóNomes = pessoas.map(valor => valor.nome);
const sóIdades = pessoas.map(valor => valor.idade);
const comId = pessoas.map((obj, indice) => obj.id = (indice + 1) * 100);

console.log(sóNomes);
console.log(sóIdades);
console.log(comId);