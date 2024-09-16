// Herança:

class Carro{ //Classe PAI
    constructor(nome, portas){

        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }
    ligar = function(){
        this.ligado = true;
    }
    desligar = function(){
        this.ligado = false;
    }
    setCor = function(cor){
        this.cor = cor;
    }

}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao
        this.setCor('Verde');
    }
    atirar = ()=>{
        if(this.municao > 0){
            this.municao --
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas, arcondicionado){
        super(nome, portas);
        this.arcondicionado = arcondicionado;
    }
}

const c1 = new Carro('Normal', 5, 'Azul');
c1.setCor('Azul')



const c2 = new Militar('Tanque', 1, 100, 50);
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`Nome:${c1.nome}`);
console.log(`Portas:${c1.portas}`);
console.log(`Ligado:${c1.ligado}`);
console.log(`Cor:${c1.cor}`);
console.log('--------------')

console.log(`Nome:${c2.nome}`);
console.log(`Portas:${c2.portas}`);
console.log(`Munição:${c2.municao}`);
console.log(`Blindagem:${c2.blindagem}`);
console.log(`Cor:${c2.cor}`);
