/*const day = new Date();
const dateofTheDay = day.getDay();
const month = day.getMonth();
const hour = day.getHours();
const year = day.getFullYear();
let nameOfTheDay;

const result = document.getElementById('result');


function showTheDate(date) {
    let name;
    switch (dateofTheDay) {
        case 0:
            name = 'Sunday';
            break;
        case 1:
            name = 'Monday';
            break;
        case 2:
            name = 'Tuesday';
            break;
        case 3:
            name = 'Wednesday';
            break;
        case 4:
            name = 'Thursday';
            break;
        case 5:
            name = 'Friday';
            break;
        case 6:
            name = 'Saturday';
            break;
        default:
            alert('Error');
    }
    return name;
}

function zero(num){
    return num >= 10 ? num : `0${num}`;
}

nameOfTheDay = showTheDate(dateofTheDay);
result.innerHTML = `<p>Today is ${nameOfTheDay}, ${dateofTheDay} of ${month} of ${year} at ${zero(hour)}</p>`;
*/

const day = new Date();
const result = document.getElementById('result');

result.innerHTML = day.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});