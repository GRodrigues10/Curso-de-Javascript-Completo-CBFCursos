// const c1Div = document.getElementById('c1');
const cursos = [...document.querySelectorAll('.curso')];

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const elemento = evt.target;
        elemento.classList.add('destaque');
    })
})

// c1Div.addEventListener('click', (evt) => {
//     const elemento = evt.target;
//     elemento.classlList.add('c1');
//     alert(elemento)
// })

// function msg(){
//     alert('Clicou!')
// }