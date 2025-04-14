const pessoas = [
    {nome: "Pedro", idade: 10},
    {nome: "Jurandir ", idade: 32},
    {nome: "Marcos", idade: 18},
    {nome: "João", idade: 20}
];

const adicionandoId = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;

    return newObj;
});

console.log(adicionandoId);