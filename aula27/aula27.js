// Funções Geradoras:

// Tem que usar o nome function:
function* cores(){
    yield 'Vermelho'
    yield 'Azul'
    yield 'Verde'
    yield 'Amarelo'
}

const itc = cores();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

console.log('\n\n\n')

function* perguntas(){
    const nome = yield 'Qual o seu nome?';
    const esporte = yield 'Qual o seu esporte favorito?';
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte;
}

const itc2 = perguntas();
console.log(itc2.next().value);
console.log(itc2.next('Gabriel').value);
console.log(itc2.next('Futebol').value);



function* contador(){
    let i=0;
    while(true){
        yield i++;
    }
}



const itc3 = contador();

// console.log(itc3.next().value);
// console.log(itc3.next().value);
// console.log(itc3.next().value);
// console.log(itc3.next().value);
// console.log(itc3.next().value);
// Infinito...
console.log('\n\n\n')
for(let i = 0; i< 10; i++){
    console.log(itc3.next().value);
}