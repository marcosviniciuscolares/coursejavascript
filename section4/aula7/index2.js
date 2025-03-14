function Calculadora(){
        this.display = document.querySelector('.display');
        this.btnClear = document.querySelector('.btn-clear');
        this.btnEqual = document.querySelector('.btn-eq');
        this.btnDelete = document.querySelector('.btn-de');

        this.inicia = function(){
            this.cliqueBotoes();
        };

        this.cliqueBotoes = function(){
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
        };

        this.btnParaDisplay = function(valor){
            this.display.value += valor;
        };

        this.clearDisplay = function(){
            this.display.value = '';
        };

        this.deleteOne = function(valor){
            this.display.value = this.display.value.slice(0, -1);
        };

        this.equalNum = function(){
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
        };
}

const calculadora = new Calculadora();
calculadora.inicia();