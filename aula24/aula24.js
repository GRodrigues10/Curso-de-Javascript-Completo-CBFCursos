// Funções anônimas

const funcAnonymus = function(){
    console.log('Eu sou uma função anônima');
   
}

funcAnonymus()


const funcAnonymus2 = function(...valores){
   
    let res = 0;
    for(v of valores){
        res += v;
    }
    return res
   
}

console.log(funcAnonymus2(2,4,6,7));



// Função Construtor(Anônima)
const funcAnonymus3 = new Function('v1', 'v2', 'return v1 + v2');

console.log(funcAnonymus3(2,8));

