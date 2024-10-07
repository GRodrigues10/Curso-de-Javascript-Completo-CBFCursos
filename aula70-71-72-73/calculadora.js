const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const teclaOnOff = document.getElementById('teclaOnOff');
const teclaCPY = document.getElementById('teclaCPY');
const teclaLimpar = document.getElementById('teclaLimpar');
const teste = document.getElementById('teste');


let sinal = false;
let ligado = true; // Novo estado para controlar ON/OFF

// Adicionando evento para números
teclasNum.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (ligado) { // Verifica se a calculadora está ligada
            display.innerHTML += e.target.innerHTML;
            sinal = false; // Reseta sinal quando um número é clicado
        }
    });
});

// Adicionando evento para operadores
teclasOp.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (ligado && !sinal) {
            sinal = true;
            if (display.innerHTML === '0') {
                display.innerHTML = '';
            }
            if (e.target.innerHTML === 'x') {
                display.innerHTML += '*';
            } else {
                display.innerHTML += e.target.innerHTML;
            }
        }
    });
});

// Adicionando evento para limpar
teclaLimpar.addEventListener('click', () => {
    if (ligado) { // Verifica se a calculadora está ligada
        display.innerHTML = ''; // Limpa o display
    }
});

// Adicionando evento para calcular o resultado
teclaRes.addEventListener('click', () => {
    if (ligado) { // Verifica se a calculadora está ligada
        try {
            display.innerHTML = eval(display.innerHTML.replace(/x/g, '*')); // Calcula a expressão
        } catch (error) {
            display.innerHTML = 'Error'; // Em caso de erro, mostra "Error"
        }
    }
});

// Adicionando evento para ligar/desligar
teclaOnOff.addEventListener('click', (e) => {
    if (ligado) {
        display.innerHTML = ''; // Limpa o display
        e.target.innerHTML = 'OFF'; // Muda para OFF
    } else {
        display.innerHTML = '0'; // Reseta para '0' ao ligar
        e.target.innerHTML = 'ON'; // Muda para ON
    }
    ligado = !ligado; // Alterna o estado
});

teclaCPY.addEventListener('click', (e)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select();
    // teste.setSelectionRange(0,99999)// Mobile
    // navigator.clipboard.writeText(teste.value)
})

