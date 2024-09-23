class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError('Esta classe não pode ser instânciada!');
        }
        if (this.ligar === undefined) {
            throw new TypeError('É obrigatório implementar o método ligar!');
        }
        if (this.desligar === undefined) {
            throw new TypeError('É obrigatório implementar o método desligar!');
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super();
        this.turbo = new Turbo(estagioTurbo);
        
        if (tipo == 1) {
            this.velMax = 120 + this.turbo.potencia;
            this.nome = 'Normal';
        } else if (tipo == 2) {
            this.velMax = 160 + this.turbo.potencia;
            this.nome = 'Esportivo';
        } else if (tipo == 3) {
            this.velMax = 200 + this.turbo.potencia;
            this.nome = 'Fórmula 1';
        }
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Velocidade Máxima: ${this.velMax}`);
        console.log(`Turbo: ${this.turbo.potencia} hp`);
        console.log(`Rodas: ${this.rodas}`);
        console.log(`Portas: ${this.portas}`);
        console.log(`Ligado: ${this.ligado}`);
        console.log('--------------------');
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} ligado!`);
    }
    desligar(){
        this.desligado = true;
        console.log(`${this.nome} desligado!`);
    }
}

class Turbo {
    constructor(estagio) {
        if (estagio === 0) {
            this.potencia = 0;
        } else if (estagio === 1) {
            this.potencia = 50;
        } else if (estagio === 2) {
            this.potencia = 75;
        } else if (estagio === 3) {
            this.potencia = 100;
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo);
        this.velMax = 300;
        this.nome = 'Carro Especial';
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Velocidade Máxima: ${this.velMax}`);
        console.log(`Turbo: ${this.turbo.potencia} hp`);
        console.log('--------------------');
    }
}

// Exemplos de uso
const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);
// const c4 = new CarroPadrao(3); - Só serve para classe base.

c1.info();
c2.info();
c3.info();
c1.ligar();
c2.ligar();