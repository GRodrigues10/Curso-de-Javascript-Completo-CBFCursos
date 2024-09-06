const caixaInput = document.getElementById('caixa');

let cores = ['Azul', 'Vermelho', 'Verde', 'Amarelo', ['Claro', 'Escuro', 'Médio']];

let cursos = ['C', 'Javascript', 'Python', 'C++', 'Java', 'Typescript', 'React JS', 'Bootstrap', cores[4][0]];

cursos.push('Dukescript');
cursos.push('Biescript');

cursos.pop();

cursos.unshift('Geladeira de duas portas');

cursos.shift();


cursos.map((e)=>{
    let p = document.createElement('p');
    p.innerHTML = e;
    caixaInput.appendChild(p)
})


