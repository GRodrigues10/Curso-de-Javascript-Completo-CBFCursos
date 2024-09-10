// Objetos

class Pessoa{
    constructor(pnome, pidade){
        this.nome = pnome;
        this.pidade = pidade;
    }
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log('------------------------')
    }
    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.tipo;
    }


    getInfo()
    {
        return [this.nome, this.tipo, this.velMax];
    }
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }

}

let pessoas = [];
const btn_add = document.getElementById('btn_add');
const res = document.querySelector('.res');

btn_add.addEventListener('click', (evt)=>{
    const nome = document.querySelector('#f_nome');
    const idade =  document.querySelector('#f_idade');
    const p = new Pessoa(nome.value,idade.value);
    pessoas.push(p);
    nome.value = '';
    idade.value = '';
    nome.focus();
    console.log(pessoas)

})