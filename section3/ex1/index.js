const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) && isNaN(peso)) {
        alert("Ei, colcoa lá o peso e altura certinho");
        return;
    } 
        
    const imc = peso / (altura * altura);
    
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)}</p>`;
});
