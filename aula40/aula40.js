const caixa1 = document.querySelector('#caixa1');
const btn_c = document.querySelectorAll('.curso');
const cursos = ['HTML', 'CSS', 'JAVASCRIPT','REACT JS', 'REACT NATIVE', 'TYPESCRIPT'];

cursos.map((e, i)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', `c${i+1}`);
    novoElemento.setAttribute('class', 'curso c2')
    novoElemento.innerHTML = e;
    const btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute('src', './lixo.png');
    btn_lixeira.setAttribute('class', 'btn-lixeira');
    btn_lixeira.addEventListener('click', (e)=>{
        caixa1.removeChild(e.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento);
})

