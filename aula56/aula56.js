// Template Strings

const caixa = document.getElementById('caixa');

// const curso = 'Javascript';
// const canal = 'CBF Cursos';

const carros = ['Polo', 'Uno', 'Siena', 'Ferrari'];
let ul = '<ul>';
carros.map((e)=>{
    ul+=`<li>${e}</li>`;
})
ul+=`</ul>`;

// const frase = `Este é o curso de ${curso} <br/> do canal ${canal}.`;

caixa.innerHTML = ol;
