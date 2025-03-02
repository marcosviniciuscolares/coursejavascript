let segundos = 0;
let timer;

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
     timer = setInterval(function (){
        segundos++;
        const tempoFormatado = formatarTempo(segundos);
        document.getElementById('relogio').innerText = tempoFormatado;
    }, 1000);
}

function pausarTemp(){
    clearInterval(timer);
}

function zerarTemp(){
    clearInterval(timer);
    document.getElementById('relogio').innerText = '00:00:00';
}