const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');
const btn = document.getElementById('transferir');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((e)=>{
    e.addEventListener('click', (evt) => {
        const curso = evt.target;
        curso.classList.toggle('selecionado');//Toggle, adiciona e remove classes dependendo se o elemento tem ou não uma classe específica.
        btn.addEventListener('click', ()=>{
            const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
            const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];
            console.log(cursosNaoSelecionados)
            // console.log(cursosSelecionados);
            cursosSelecionados.map((e)=>{
                caixa2.appendChild(e)
            })

            cursosNaoSelecionados.map((e)=>{
                caixa1.appendChild(e)
            })
        })
    })
})
