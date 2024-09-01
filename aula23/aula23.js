// Rest
function soma(...valores){
    let tam = valores.length
    let res = 0;
    // for(let i = 0; i < tam; i++){
    //     res += valores[i];
    // }

    // for(n of valores){
    //     res += n
    // }
    
    for(n in valores){
        res += valores[n]
    }
    return res;
}

console.log(soma(5, 7, 23, 5));