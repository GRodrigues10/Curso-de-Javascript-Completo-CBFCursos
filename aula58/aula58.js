// Objetos

class Carro{
    constructor(nome, ptipo){
        this.nome = nome;
        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velMax = 250;
        }
        else if(ptipo == 2){
            this.tipo = 'Utilitário'
            this.velMax = 100;

        }
        else if(ptipo == 3){
            this.tipo = 'Passeio'
            this.velMax = 140;

        }
        else{
            this.tipo = 'Militar'
            this.velMax = 190;

        }
    }
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Velocidade Máxima: ${this.velMax}`);
        console.log('------------------------')
    }
    getNome(){
        return this.nome;
    }

    getTipo(){
        return this.tipo;
    }

    getVelMax(){
        return this.velMax;
    }

    getInfo()
    {
        return [this.nome, this.tipo, this.velMax];
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.nome = tipo
    }

    setVelMax(max){
        this.nome = max
    }
}

let c1 = new Carro('Rapidão', 1);
let c2 = new Carro('Super Luxo', 2);    
let c3 = new Carro('Bombadão', 4);
let c4 = new Carro('Carrego Tudo', 3);

// console.log(c1.nome);
// console.log(c1.tipo);
// console.log(c2.nome);
// console.log(c2.tipo);
// console.log(c3.nome);
// console.log(c3.tipo);
// console.log(c4.nome);
// console.log(c4.tipo);

// c2.info();
// c3.info();

c1.setNome('Super Veloz')

c1.info()

console.log(c1.getNome());
console.log(c1.getInfo()[0]);







