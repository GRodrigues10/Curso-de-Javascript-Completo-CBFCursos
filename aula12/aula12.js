// Operador spread - quebra um array e devolve elemento a elemento.

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1, ...n2];

const jogador1 = {
    nome: 'Gabriel',
    energia: 100,
    vidas: 3,
    fala: 'OI'
}

const jogador2 = {
    nome: 'Duke',
    energia: 80,
    vidas: 5,
    latido: 'AUAUAUAU'
}

const jogador3 = {
    ...jogador1, ...jogador2
}


const soma = (v1, v2, v3) => {
    return v1 + v2 + v3;
}

let valores = [3, 5, 6];

const objs1 = document.getElementById('ola');
const objs2 = [...document.getElementsByTagName('div')];

objs2.forEach(element =>{
   element.innerHTML = 'Mudei o nome com o ForEach e spread'
})



console.log(`n1: ${n1} \nn2: ${n2}\nn3: ${n3}`);

console.log(jogador3)


console.log(soma(...valores));

console.log(objs1); //Tem que rodar pelo navegador!

console.log(objs2); //Tem que rodar pelo navegador!
