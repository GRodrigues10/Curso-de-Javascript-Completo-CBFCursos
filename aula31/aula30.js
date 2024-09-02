const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');

// console.log(c1);
// console.log(c1.id);
// console.log(c1.innerHTML);
// c1.innerHTML='Mudando o título 1';

// c2.innerHTML = 'Mudando o título 2';

const elements = [c1,c2,c3,c4,c5,c6];

elements.map((e)=>{
    console.log(e)
    e.innerHTML = 'Hello There!'
})
