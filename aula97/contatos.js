import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont];
    },

    addContato:function(novo_cont, destinoDOM){
        const cont={
            nome:novo_cont.nome,
            telefone:novo_cont.telefone,
            email:novo_cont.email
        }
        contatos.push(cont);
        destinoDOM.innerHTML = '';

        contatos.forEach((c)=>{
            const div = document.createElement('div');
            div.setAttribute('class', 'campo');
            const p_nome = document.createElement('p');
            p_nome.innerHTML = c.nome;
            const p_telefone = document.createElement('p');
            p_telefone.innerHTML = c.telefone;
            const p_email = document.createElement('p');
            p_email.innerHTML = c.email;
            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            destinoDOM.appendChild(div);
        })
   
    }
}

export default contato;

