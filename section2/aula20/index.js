function agir(nome, sobrenome, peso, altura){
    let nome1 = document.getElementById('nome').value;
    let sobrenome1 = document.getElementById('sobrenome').value;
    let peso1 = document.getElementById('peso').value;
    let altura1 = document.getElementById('altura').value;

    let pessoa = {nome: nome1, sobrenome: sobrenome1, peso: peso1, altura: altura1};
    console.log(pessoa);
}

console.log(agir());

