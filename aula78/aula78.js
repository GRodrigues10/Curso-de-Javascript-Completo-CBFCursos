// Relógio:
const div_relogio = document.getElementById('div-relógio');

const data = new Date();

const relógio = () => {
const data = new Date();
let horas = data.getHours();
horas = horas < 10 ? '0' + horas : horas;

let minutos = data.getMinutes();
minutos = minutos < 10 ? '0' + minutos : minutos;

let segundos = data.getSeconds();
segundos = segundos < 10 ? '0' + segundos : segundos

let hora_formatada = horas + ':' + minutos + ':' + segundos
div_relogio.innerHTML = hora_formatada;
}


const intervalo = setInterval(relógio, 1000);


