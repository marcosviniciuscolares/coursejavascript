const data = new Date('1800-4-29');
const diaDaSemana = data.getDay();

let nomeDoDia;

//variável que quero checar  
switch (diaDaSemana) {
    case 0: //Caso o dia da semana for zero, faça isso:
        nomeDoDia = 'Domingo';
        break; //Fecha a condição/sai dela
    case 1:
        nomeDoDia = 'Segunda';
        break;
    case 2:
        nomeDoDia = 'Terça';
        break;
    case 3:
        nomeDoDia = 'Quarta';
        break;
    case 4:
        nomeDoDia = 'Quinta';
        break;
    case 5:
        nomeDoDia = 'Sexta';
        break;
    case 6:
        nomeDoDia = 'Sábado';
        break;
    default:
        nomeDoDia = '';
}

console.log(diaDaSemana, nomeDoDia);