const palco = document.getElementById('palco');
const num_objetos = document.getElementById('num_objetos');
const txt_qtde = document.getElementById('txt_qtde');
const btn_add = document.getElementById('btn_add');
const btn_remover = document.getElementById('btn_remover');


let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = [];
let numBola = 0;


window.addEventListener('resize', (e)=>{
     larguraPalco = palco.offsetWidth;
     alturaPalco = palco.offsetHeight;
     
})

btn_add.addEventListener('click', (e)=>{
    
    const qtde = txt_qtde.value;
    for(let i = 0; i < qtde; i++){
        // Criar bolinhas..(Instanciar novas bolinhas)
    }
    
})

btn_remover.addEventListener('click', (e)=>{


    bolas.map((elemento)=>{
        // Remover bolinha...
    })
    
})

