// Iteradores

const valores = [3, 5, 7, 4, 10, 9, 7];
const it_valores = valores[Symbol.iterator]();//Criando iterador para o array 'valores'.

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
