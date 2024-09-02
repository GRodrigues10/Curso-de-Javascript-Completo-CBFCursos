// Map:

// Usado para percorrer uma coleção inteira, sem interrupção.

// const cursos = ['Html5', 'Css3', 'Javascript', 'Typescript', 'React JS', 'Bootstrap'];

// cursos.map((elemento, index)=>{
//     console.log(`Curso: ${elemento} | Posição: ${index}`);
// })


// let elemento = document.getElementsByTagName('div');
// console.log(elemento);

// elemento = [...elemento]

// elemento.map((e, i)=>{
//     console.log(e, i)
//     e.innerHTML = 'GABRIEL';
// });

// const elementos = document.getElementsByTagName('div');

// const val = Array.prototype.map.call(elementos, ({innerHTML})=> innerHTML)

// console.log(val);

const converterInt = (elemento) => {
    return parseInt(elemento);
};

let num = ['1','2','5','11'].map((converterInt));

console.log(num)



