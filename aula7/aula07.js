// Operadores Lógicos:

let n1=10, n2=5, n3=15, n4=2;

console.log((n1 > n2) && (n3 < n4));
console.log((n1 > n2) || (n3 < n4));
console.log(!(n1 > n2) && (n3 < n4));
console.log(!(n1 > n2) || (n3 < n4));

if(!(n1 > n2) && (n3 > n4)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}


if(!(n1 > n2) || (n3 > n4)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

