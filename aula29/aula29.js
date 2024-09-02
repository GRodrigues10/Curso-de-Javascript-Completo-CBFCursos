function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function(){
        setTimeout(function() {// Não tem como acessar as propriedades(this) no setTimeOut, usa o contexto da execução atual, por isso não tem acesso ao contexto do pai.
        
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }

    this.dados_arrow = function(){
        setTimeout(() => {// Tem como acessar as propriedades(this) no setTimeOut,usa o contexto do root, do pai, nesse caso a função aluno.
        
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }
}

const a1 = new aluno('Gabriel', 100)
a1.dados_anonimo()
a1.dados_arrow()
