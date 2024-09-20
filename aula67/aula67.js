// PROTOTYPES - Quando precisar adicionar uma propriedade ou método para um objeto.

const Nave = function(energia){
    this.energia = energia;
    this.disparos = 20;
    this.teste = function(){
        console.log('Testando')
    }
}


const n1 = new Nave(100);

Nave.prototype.vidas = 3;//Adicionando vidas no objeto.
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}


console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)
n1.disparar();
n1.disparar();
n1.disparar();

console.log(n1.disparos)
n1.teste()