let textRelogio = document.getElementById('relogio')


function mostreHora(){
    
}

const timer = setInterval(function (){
    console.log(mostreHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer);
    console.log('rapaz');
}, 5000);