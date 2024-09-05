// Find: - Pesquisar de forma simples algum elemento dentro do array.

const p_array = document.getElementById('array');
const txt_pesquisar = document.getElementById('txt_pesquisar');
const btn_pesquisar = document.getElementById('btnPesquisar');
const resultado = document.getElementById('resultado');

const elementos_array = [2, 5, 4, 26, 6, 3, 10, 50, 45];
p_array.innerHTML = '['+elementos_array+']';

btn_pesquisar.addEventListener('click',(e)=>{
    if(txt_pesquisar.value === ''){
        alert('Por favor, preencha o campo!');
        return;
    }
   const retorno = elementos_array.find((element, index)=>{

       
        if(element == txt_pesquisar.value){

            resultado.innerHTML = `Valor pesquisado: ${element} | Posição: ${index} `

            return element;
        }else{
            resultado.innerHTML = 'Elemento não encontrado!'
        }

    })
})

