function criaCalculadora(){
    return{

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnEqual: document.querySelector('.btn-eq'),
        btnDelete: document.querySelector('.btn-de'),

        inicia(){
            this.cliqueBotoes();
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-de')){
                    this.deleteOne(el.innerText);
                }

                if(el.classList.contains('btn-eq')){
                    this.equalNum();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        }, 

        deleteOne(valor){
            this.display.value = this.display.value.slice(0, -1);
        },

        equalNum(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta errada");
                    return;
                }

                this.display.value = conta;
            } catch(e){
                alert("Conta errada");
                return;
            }
        },
    }
}

const calculadora = criaCalculadora();



calculadora.inicia();