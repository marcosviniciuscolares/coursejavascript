function f1(){
    let valores = 0;
                         //Variável especial
    for(let argumento of arguments){
        valores += argumento;
    }

    console.log(valores);
}
    //Argumentos
f1(1,2,3,4,5,56,7,78);