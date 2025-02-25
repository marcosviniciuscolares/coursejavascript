/*try{
    console.log(existoSim);
} catch(err){
    console.log("Rapaz, ele tá sem zap!");
}*/

function soma(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw('Rapaz,  ele tá sem zap');
    }

    return x + y;
}

try{
    console.log(soma('a', 4));
} catch(error){
    console.log(error)
}