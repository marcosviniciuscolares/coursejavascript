let segundos = 0;
let timer;
let textoRelogio = document.getElementById('relogio');

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;

    return (
        (horas < 10 ? '0' : '') + horas + ':' +
        (minutos < 10 ? '0' : '') + minutos + ':' +
        (segs < 10 ? '0' : '') + segs
    );
}


function iniciarTemp(){
    clearInterval(timer);
     timer = setInterval(function (){
        segundos++;
        const tempoFormatado = formatarTempo(segundos);
        document.getElementById('relogio').innerText = tempoFormatado;
    }, 1000);
    textoRelogio.classList.remove('pausado');
}

function pausarTemp(){
    clearInterval(timer);
    textoRelogio.classList.add('pausado');
}

function zerarTemp(){
    clearInterval(timer);
    segundos=0;
    textoRelogio.innerText = '00:00:00';
    textoRelogio.classList.remove('pausado')
}