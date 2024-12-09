import c from './contatos.js'
const listaContatos = document.getElementById('listaContatos');
const btn_gravar = document.getElementById('btn_gravar');

btn_gravar.addEventListener('click', (evento)=>{
    const contato={
        nome:document.getElementById('f_nome').value,
        telefone:document.getElementById('f_telefone').value,
        email:document.getElementById('f_email').value
    }
    c.addContato(contato, listaContatos);
    console.log(c.getTodosContatos())
})