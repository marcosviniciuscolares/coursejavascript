const numeros = [12,34,4,6,60,43, 10];
const numerosMaioresQue10 = numeros.filter(valor => valor >= 10);
console.log(numerosMaioresQue10);


const pessoas = [
    {
        nome: "Marcos",
        idade: 19,
    },
    {
        nome: "Julia",
        idade: 20,
    },
    {
        nome: "Carlos",
        idade: 45,
    },
    {
        nome: "Passos",
        idade: 23,
    },
    {
        nome: "Pedro",
        idade: 21,
    },
    {
        nome: "Pindamonhagaba",
        idade: 345,
    }
];

const pessoasComNomeGrande = pessoas.filter((valor) => {
    return valor.nome.length <= 5;
});

const pessoasVelhas = pessoas.filter((idade) => {
    return idade.idade >= 50;
});

const pessoasQueTemLetraA = pessoas.filter((letra) => {
    return letra.nome.toLowerCase().endsWith("a");
})

console.log(pessoasComNomeGrande);
console.log(pessoasVelhas);
console.log(pessoasQueTemLetraA);