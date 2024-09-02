// Função aninhada:

const soma = function(...valores){
    const somar = (valor)=>{
        let res = 0;
        for(v of valor){
            res += v
        }
        return res;
    }
    return somar(valores);
}

console.log(soma(10,2))