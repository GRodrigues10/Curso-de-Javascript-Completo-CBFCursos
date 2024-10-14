const numero = document.getElementById('numero');
const btn = document.getElementById('btn-promessa');

btn.addEventListener('click', (e)=>{
    numero.innerHTML = 'Processando...'
    promessa()
    .then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove('erro');
        numero.classList.add('ok')
    })//Deu certo!
    .catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add('erro');
        numero.classList.remove('ok')
    })//Deu errado!
    
    
});

const promessa = () =>{
    let p = new Promise((resolve, reject)=>{//resolve, reject
        let resultado = true;
        let tempo = 3000;
        
        setTimeout(()=>{
            if(resultado){
                resolve('Deu tudo certo!')
            }else{
                reject('Deu ruim kkkk')
            }
        }, tempo);
    
    });//Criando a minha promessa!
    
    return p;
  
}



// if(resultado){
//     numero.innerHTML = 'Deu tudo certo!'
//     numero.classList.remove('erro');
//     numero.classList.add('ok')
// }else{
//     numero.innerHTML = 'Deu ruim kkkk'
//     numero.classList.add('erro');
//     numero.classList.remove('ok')
// }

numero.innerHTML = 'Esperando...'
