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

}

const c1 = new Carro('Normal', 5, 'Azul');
c1.setCor('Azul')
console.log(`Nome:${c1.nome}`);
console.log(`Portas:${c1.portas}`);
console.log(`Ligado:${c1.ligado}`);
console.log(`Cor:${c1.cor}`);
