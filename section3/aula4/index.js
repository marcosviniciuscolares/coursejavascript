const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Vinicius',
    endereco: {
        rua: 'Jararão',
        numero: '7'
    },
    idade: 45
}

const {endereco: {rua, numero}} = pessoa;

console.log(pessoa, rua, numero)
