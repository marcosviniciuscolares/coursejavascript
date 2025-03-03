const inputTarefa = document.querySelector('#tarefaInput');
const butãoAddTarefa = document.querySelector('#button-add-tarefa');
const listaTarefas = document.querySelector('#tarefas');

function criarElemento(){
    const li = document.createElement('li');
    return li;
}

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
})

function criarTarefa(textoinput){
    const lista = criarElemento();
    lista.innerText= textoinput;
    listaTarefas.appendChild(lista);
    limparInput();
    criarBotãoApagar(lista);
    salvarTarefa();
}

function criarBotãoApagar(li){
    li.innerText += ' ';
    const butãoApagar = document.createElement('button');
    butãoApagar.textContent = "Apagar";
    butãoApagar.setAttribute('class', 'apagar');
    li.appendChild(butãoApagar);
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});

butãoAddTarefa.addEventListener('click', () => {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

function salvarTarefa(){
    const liTarefa = listaTarefas.querySelectorAll('li');
    const listaTarefa = [];

    for(let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto=tarefaTexto.replace('Apagar', '').trim;
        listaTarefa.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaTarefa);
    localStorage.setItem('Tarefas', tarefaJSON);
}
