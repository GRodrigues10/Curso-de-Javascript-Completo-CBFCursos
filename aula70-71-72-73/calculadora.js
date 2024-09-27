const  teclasNum = [...document.querySelectorAll('num')];
const  teclasOp = [...document.querySelectorAll('op')];
const  teclaRes = document.querySelector('.res');
const  display = document.querySelector('.display');

teclasNum.map((el)=>{
    el.addEventListener('click', (e) =>{
        display.innerHTML += e.target.innerHTML
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (e) =>{
        display.innerHTML += e.target.innerHTML
    })
})