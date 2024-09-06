// Some - Valida o array se apenas um valor do array coincindir com oq estou buscando.


const p_array = document.getElementById('array');
const btnVerificar = document.getElementById('btnVerificar');
const resultado = document.getElementById('resultado');

const elementos_array = [1, 15, 12, 66, 6, 3, 10, 5, 5];
p_array.innerHTML = '['+elementos_array+']';

btnVerificar.addEventListener('click',(e)=>{
    
    const retorno = elementos_array.some((e, i)=>{
        if(e < 18){
            resultado.innerHTML = 'Array não conforme na posição:' + i;
        }
        return e >= 18;
    })
    if(retorno){
        resultado.innerHTML = 'Ok'
    }
    

    
})
