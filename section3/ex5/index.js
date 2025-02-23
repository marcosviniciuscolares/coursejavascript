const paragraph = document.querySelector('.paragraph');
const p = paragraph.querySelectorAll('p');

const estilo = getComputedStyle(document.body);
const backgroundColor = estilo.backgroundColor;

for (let para of p){
    para.style.backgroundColor = backgroundColor;
    para.style.color = 'white';
}
