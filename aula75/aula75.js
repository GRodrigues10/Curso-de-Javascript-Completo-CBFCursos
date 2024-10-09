const numero = document.getElementById('numero');

let promise = new Promise((resolve, reject)=>{//resolve, reject
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


promise.then((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('erro');
    numero.classList.add('ok')
})//Deu certo!
promise.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.add('erro');
    numero.classList.remove('ok')
})//Deu errado!


// if(resultado){
//     numero.innerHTML = 'Deu tudo certo!'
//     numero.classList.remove('erro');
//     numero.classList.add('ok')
// }else{
//     numero.innerHTML = 'Deu ruim kkkk'
//     numero.classList.add('erro');
//     numero.classList.remove('ok')
// }

numero.innerHTML = 'Processando...'
