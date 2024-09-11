// Objetos Literais - É um objeto único.

const Pessoa = {
    nome:'Gabriel',
    idade:22,
    rico:false,
    getNome:function(){
        return this.nome
    },
    setNome: function(nome)
    {
        this.nome = nome;
    }
}

const p2 = Pessoa;
const p3 = Pessoa;

p3.nome = 'Jebbanilson'
p2['nome'] = 'Astrogildo';
Pessoa.setNome('Duke')


console.log(p2)
console.log(p3)
console.log(p2.getNome())