function Pessoa(pnome, idade) {
   
        this.nome = pnome;
        this.idade = idade;
        this.getNome = function(){
            return this.nome
        }

        this.info = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);  // Corrigido para usar idade
        console.log('------------------------');
    }

    this.getNome = function(){
        return this.nome;
    }

    this.getIdade = function() {
        return this.idade;  // Corrigido para usar idade
    }

    this.getInfo = function () {
        return [this.nome, this.idade];  // Corrigido para usar idade
    }

    this.setNome = function (nome) {
        this.nome = nome;
    }

    this.setIdade = function() {
        this.idade = idade;
    }
}



let pessoas = [];
const btn_add = document.getElementById('btn_add');
const res = document.querySelector('.res');

const addPessoa = () => {
    res.innerHTML = '';  // Limpar resultados antigos
    pessoas.map((p) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'pessoa');
        div.innerHTML = `Nome: ${p.getNome()}<br/> Idade: ${p.getIdade()}`;
        res.appendChild(div);
    });
}


btn_add.addEventListener('click', (evt) => {
    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');
    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = '';
    idade.value = '';
    nome.focus();
    addPessoa();
});