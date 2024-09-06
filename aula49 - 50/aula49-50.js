// Some - Reduz o elemento e faz algo.


const p_array = document.getElementById('array');
const btnReduzir = document.getElementById('btnReduzir');
const resultado = document.getElementById('resultado');

const elementos_array = [1, 15, 12, 66, 6, 3, 10, 5, 5];
let ant = [];
let at = []

p_array.innerHTML = '['+elementos_array+']';

btnReduzir.addEventListener('click',(e)=>{
    
     resultado.innerHTML =  elementos_array.reduce((anterior, atual, posicao)=>{
        ant.push(anterior)
        at.push(atual)
        return anterior + atual;
    })

    resultado.innerHTML += '<br/> Anterior:' + ant
    resultado.innerHTML += '<br/> Atual:' + at

    
});
