function retornaFuncao(){
    const nome = 'Marcos'
    return function(){
        return nome;      //Exmplo de closure
    }
}

const funcao = retornaFuncao();
console.log(funcao());