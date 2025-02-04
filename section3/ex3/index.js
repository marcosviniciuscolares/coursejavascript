const elements = [
  {tag: 'p', phrase: 'Numero 1'},
  {tag: 'div', phrase: 'Gentlemens, start, your, ENGINES'},
  {tag: 'footer', phrase: 'Vai chorar?'},
  {tag: 'section', phrase: 'Cof cof - Arthur Morgan'}  
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++){
    let {tag, phrase} = elements[i];
    let element = document.createElement(tag);
    element.innerHTML = phrase;
    div.appendChild(element);
}

container.appendChild(div);
