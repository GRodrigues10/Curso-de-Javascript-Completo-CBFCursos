// Polimorismo - Capacidade de um mesmo método ter ações diferentes.

class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo = new Turbo(estagioTurbo);
        if(tipo == 1){
            this.velMax = 120 + this.turbo
            this.nome = 'Normal'
        }
        else if(tipo == 2){
            this.velMax = 160 + this.turbo;
            this.nome = 'Esportivo'

        }
        else if(tipo == 3){
            this.velMax = 200 + this.turbo.potencia
            this.nome = 'Fórmula 1'

        }
        this.velMax += this.turbo
    }
    info(){
        console.log(`Nome:${this.nome}`);
        console.log(`Velociada Máxima:${this.velMax}`);
        console.log(`Turbo:${this.turbo}`);
        console.log('--------------------')
    }
}


class Turbo{
    constructor(estagio){
        if(estagio == 0){
            this.potencia = 0
        }
        else if(estagio == 1){
            this.potencia = 50
        }
        else if(estagio == 2){
            this.potencia = 75
        }
        else if(estagio == 3){
            this.potencia = 100
        }
       
            
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo);
        this.velMax = 300;
        this.nome =  'Carro Especial';
    }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);

c1.info();
c2.info();
c3.info();