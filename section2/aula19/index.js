function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Marcos', 'Verstappen', 20);

console.log(pessoa1.nome)

const piloto = {
    nome: "Max",
    sobrenome: "Piquet",
    idade: 43,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} is talking about formula 1...`)
    }
}

piloto.fala();