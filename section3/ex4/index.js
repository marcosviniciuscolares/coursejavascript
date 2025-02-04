const elements = [
    {tag: 'div', phrase: ''},
    {tag: 'h1', phrase: 'Welcome to the party!'},
    {tag: 'p', phrase: 'This is the greater party in the world, sit and enjoy the show!! '}
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++){
    let {tag, phrase} = elements[i];
    let myTag = document.createElement(tag);
    myTag.innerText = phrase;
    div.appendChild(myTag);
}

container.appendChild(div);