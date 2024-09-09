// new Map = Parece o dicionário em Python, possui uma chave e um valor.

const caixa = document.querySelector('#caixa');

let mapa = new Map();

// Pode ter valores iguais, mas não pode ter chaves iguais.
mapa.set('curso', 'Javascript');
mapa.set('nivel', 'Iniciante->Avançado');
mapa.delete('nivel')

// console.log(mapa.entries())
console.log(mapa)
let pos = 'curso'
if(mapa.has('curso')){
    res = 'A chave existe na coleção com o valor ' + mapa.get(pos) + '!';
}
else{
    res = 'A chave não existe na coleção! '
}
res += '<br/> O tamnaho da coleção é ' + mapa.size + '!'
// caixa.innerHTML = mapa.get('curso')

caixa.innerHTML = res

mapa.forEach((e)=>{
    console.log(e)
})