let n = 0;
let max = 1000;
let pares = 0;

// while(n < max){
//     console.log('CBF Cursos - ', n);
//     if(n > 10){
//         break;
//     }
//     n++;
   
// }

for(let i = n; i < max; i++){
    console.log('CBF Cursos - ' + i);
    if(i % 2 != 0){
        continue
    }
    pares++
}
console.log('Quantidade de Pares: ' + pares);
console.log('Fim de Programa!');
