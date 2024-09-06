// Iteradores

const valores = [3, 5, 7, 4, 10, 9, 7];
const textos = ['youtube', 'cachorro', 'jubarte', 'chinês', 'chapolin'];
const it_valores = valores[Symbol.iterator]();//Criando iterador para o array 'valores'.
const it_textos = textos[Symbol.iterator]()

console.log(valores);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next());
console.log(it_valores.next());
console.log(it_valores.next());
console.log(it_valores.next());

console.log('\n\n\n')

console.log(it_textos.next().value);
console.log(it_textos.next().value);
console.log(it_textos.next().value);
console.log(it_textos.next());
console.log(it_textos.next());
console.log(it_textos.next());
console.log(it_textos.next());

