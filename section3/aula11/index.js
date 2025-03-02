function returnHour(date){
    if(date && !(date instanceof Date)){
        throw new TypeError('Erro, não é uma instância de Date');
    }

    if(!date){
        date = new Date();
    }

    return date.toLocaleTimeString('PT-BR', {
        hour12: false,
        minute: '2-digit',
        second: '2-digit'
    });
}

try{
    const data = new Date('01-04-2022');
    const hour = returnHour();
    console.log(hour);
} catch(e){
    console.log('Calma');
} finally {
    console.log('Tenha um dia!');
}
