class Jogador{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
    }
}

class Tecnico{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
    }
}

let jogadores = [new Jogador('j1'),new Jogador('j2'),new Jogador('j3'),new Jogador('j4')];
let s1 = jogadores[0].id;
jogadores= jogadores.filter((j)=>{
    return j.id != s1;
});
console.log(jogadores);


let tecnicos = [new Tecnico('T1'),new Tecnico('T2'),new Tecnico('T3'),new Tecnico('T4')];
let t1 = tecnicos[0].id;

tecnicos = tecnicos.filter((t)=>{
    return t.id!=t1
});
console.log(tecnicos);
