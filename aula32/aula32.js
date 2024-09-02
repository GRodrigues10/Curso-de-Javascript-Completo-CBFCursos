// getElementByClassName: Retorna uma HTML COLLECTION

const cursosTodos = [...document.getElementsByClassName('curso')];
const cursosTodosC1 = [...document.getElementsByClassName('c1')];
const cursosTodosC2 = [...document.getElementsByClassName('c2')];


cursosTodos.map((e)=>{
    e.innerHTML = 'Gabriel'
});


cursosTodosC1.map((e)=>{
    e.style.color = 'black'
});

cursosTodosC2.map((e)=>{
    e.style.color = 'white'
});

cursosTodosC1.map((e)=>{
   e.classList.add('destaque');
});


