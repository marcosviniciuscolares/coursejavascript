let numero1 = prompt('Digite seu número: ');
numero1 = Number(numero1);
let raiz = numero1**0.5;
let notanumber = Number.isNaN(numero1);
let inteiro = Number.isInteger(Math.round(numero1));
let arredondabaixo = Math.floor(numero1);
let arredondacima = Math.ceil(numero1);
let decimal = numero1.toFixed(2);

let lugardon1 = document.getElementById('p1');
let lugardon2 = document.getElementById('p2');
let lugardon3 = document.getElementById('p3');
let lugardon4 = document.getElementById('p4');
let lugardon5 = document.getElementById('p5');
let lugardon6 = document.getElementById('p6');
let lugardon7 = document.getElementById('p7')

lugardon1.innerText = numero1;
lugardon2.innerText = inteiro;
lugardon3.innerText = raiz;
lugardon4.innerText = notanumber;
lugardon5.innerText = arredondabaixo;
lugardon6.innerText = arredondacima;
lugardon7.innerText = decimal;


