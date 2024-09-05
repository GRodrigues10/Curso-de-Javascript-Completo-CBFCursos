const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JAVASCRIPT','REACT JS', 'REACT NATIVE', 'TYPESCRIPT'];
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado');
const btnRemoveCurso = document.getElementById('btnRemoverCurso')

cursos.map((e, i)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', `c${i+1}`);
    novoElemento.setAttribute('class', 'curso c2')
    novoElemento.innerHTML = e;

    const comandos = document.createElement('div');
    comandos.setAttribute('class', 'comandos');

    const rb = document.createElement('input');
    rb.setAttribute('type', 'radio');
    rb.setAttribute('name', 'rb_curso');

    comandos.appendChild(rb);
    novoElemento.appendChild(comandos); 

    caixaCursos.appendChild(novoElemento)
});

const radioSelecionado = () => {
    const todos_radios = [...document.querySelectorAll('input[type=radio]')];
    const radioSelecionado = todos_radios.filter((e, i, a)=>{
        return e.checked;
    });
    return radioSelecionado[0]
    
}

btnCursoSelecionado.addEventListener('click',(e)=>{

    const rs = radioSelecionado()
    if(rs!= undefined){
        const CursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert(CursoSelecionado)
    }else{
        alert('Nenhum curso selecionado!')
    }
    // const CursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent ;
  
    

    console.log(todos_radios);
    console.log(rs);
    console.log(CursoSelecionado);
})

btnRemoveCurso.addEventListener('click',(e)=>{

    const rs = radioSelecionado()

    if(rs!= undefined){
        const CursoSelecionado = rs.parentNode.parentNode;
        CursoSelecionado.remove();
    }else{
        alert('Nenhum curso selecionado!')
    }
    // const CursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent ;
   

})


