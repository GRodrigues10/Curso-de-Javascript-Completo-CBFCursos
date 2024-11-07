const btn_alert = document.getElementById('btn_alert');
const btn_confirm = document.getElementById('btn_confirm');
const btn_prompt = document.getElementById('btn_prompt');

btn_alert.addEventListener('click', (e)=>{
   alert('Olá, como você está?');
});

btn_confirm.addEventListener('click', (e)=>{
    const retorno = confirm('Você está aprendendo muito?');
    if(retorno){
        console.log('Botão "ok" pressionado!');
    }else{
        console.log('Botão "cancelar" pressinado!')
    }
});

btn_prompt.addEventListener('click', (e)=>{
     let msg = prompt('Digite algo e no prompt');
     if(msg){
        console.log(`Você escreveu: ${msg}`);
     }
     else{
        console.log('Você cancelou a operação!')
     }
    
});