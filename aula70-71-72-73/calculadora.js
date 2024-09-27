const  teclasNum = [...document.querySelectorAll('num')];
const  teclasOp = [...document.querySelectorAll('op')];
const  teclaRes = document.querySelector('.res');
const  display = document.querySelector('.display');
const teclaOnOff = document.getElementById('teclaOnOff');
const teclaLimpar = document.getElementById('teclaLimpar')

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

teclaLimpar.addEventListener('click', (e)=>{
    display.innerHTML = 0
})