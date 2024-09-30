const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const teclaOnOff = document.getElementById('teclaOnOff');
const teclaLimpar = document.getElementById('teclaLimpar');

let sinal = false;

// Adicionando evento para números
teclasNum.forEach((el) => {
    el.addEventListener('click', (e) => {
        display.innerHTML += e.target.innerHTML;
        sinal = false; // Reseta sinal quando um número é clicado
    });
});

// Adicionando evento para operadores
teclasOp.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (!sinal) {
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
teclaLimpar.addEventListener('click', (e) => {
    display.innerHTML = ''; // Limpa o display
});

// Adicionando evento para calcular o resultado
teclaRes.addEventListener('click', () => {
    try {
        display.innerHTML = eval(display.innerHTML.replace(/x/g, '*')); // Calcula a expressão
    } catch (error) {
        display.innerHTML = 'Error'; // Em caso de erro, mostra "Error"
    }
});