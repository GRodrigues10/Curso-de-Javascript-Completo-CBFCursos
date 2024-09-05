// Every = verificar se os elementos estão em conformidade e retorna true ou false

const p_array = document.getElementById('array');
const btnVerificar = document.getElementById('btnVerificar');
const resultado = document.getElementById('resultado');

const elementos_array = [21, 25, 24, 26, 26, 3, 110, 50, 45];
p_array.innerHTML = '['+elementos_array+']';

btnVerificar.addEventListener('click',(e)=>{
    
    const retorno = elementos_array.every((e, i)=>{
        if(e < 18){
            resultado.innerHTML = 'Array não conforme na posição:' + i;
        }
        return e >= 18;
    })
    if(retorno){
        resultado.innerHTML = 'Ok'
    }
    

    
})
