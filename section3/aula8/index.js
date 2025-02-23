/*let controle = 0;

while(controle <= 10){
    console.log(controle);
    controle++;
}
*/

function aleatorio(min, max){
    const n = Math.random() * (max - min) + min;
    return Math.floor(n);
}

const min = 1;
const max = 50;

let rand = aleatorio(min, max);

while(rand !== 10){
   rand = aleatorio(min, max);
   console.log(rand);
}