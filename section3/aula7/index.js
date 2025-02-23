/*for of*/
const nomes = ['marcos', 'colares', 'tereza'];

for (let valor of nomes){
    console.log(valor);
}

nomes.forEach(function(valor, indice) {
    console.log(valor, indice);
});