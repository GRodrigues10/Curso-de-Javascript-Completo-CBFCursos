const s1 = Symbol();//Valor único, não pode ser usado no DOM.
const s2 = Symbol();

const s3 = Symbol.for('Gabriel');
const s4 = Symbol.for('Gabriel');

console.log(s1);
console.log(s2);
console.log(s1==s2);
console.log(s1===s2);//False
console.log(s3===s4);//True
