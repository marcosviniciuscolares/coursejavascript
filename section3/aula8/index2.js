function rand(min, max){
    const n = Math.random() * (max - min) + min;
    return Math.floor(n);
}

const min = 0;
const max = 11;

let ramdomn = rand(min, max);

do {
    ramdomn = rand(min, max);
    console.log(ramdomn);
} while(ramdomn !== 10);