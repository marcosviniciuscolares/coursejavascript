function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        get imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice;
        },
    }
}

const p1 = criaPessoa("MArcos", "Tácio", 1.72, 45);
console.log(p1.nome)
console.log(p1.imc);
