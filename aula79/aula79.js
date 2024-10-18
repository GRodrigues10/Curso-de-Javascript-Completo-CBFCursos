const div_data = document.getElementById("div_data");
const div_relogio = document.getElementById("div_relogio");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const som_alarme = new Audio('alarme.mp3');
som_alarme.loop = true; // Repete o alarme indefinidamente.

let ts_atual = null;
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

// Função para ativar o alarme
btn_ativar.addEventListener('click', (e) => {
    const tempo_alarme = parseInt(tmp_alarme.value); // Obtém o valor do input e converte para número inteiro
    if (isNaN(tempo_alarme) || tempo_alarme <= 0) {
        alert('Por favor, insira um tempo válido para o alarme.');
        return;
    }
    ts_atual = Date.now();
    ts_alarme = ts_atual + (tempo_alarme * 1000); // Converte o valor do input em milissegundos
    alarme_ativado = true;
    const dt_alarme = new Date(ts_alarme);
    
    // Formatação correta da hora do alarme
    let horas = dt_alarme.getHours();
    let minutos = dt_alarme.getMinutes();
    let segundos = dt_alarme.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    hora_alarme.innerHTML = `Hora do Alarme: ${horas}:${minutos}:${segundos}`;
});

// Função para parar o alarme
btn_parar.addEventListener('click', (e) => {
    if (alarme_tocando) {
        som_alarme.pause();
        som_alarme.currentTime = 0; // Reseta o som para o início
        alarme_tocando = false;
        alarme_ativado = false;
        hora_alarme.innerHTML = "Alarme Parado";
    }
});

// Função para checar o alarme a cada segundo
const checarAlarme = () => {
    if (alarme_ativado && !alarme_tocando) {
        if (Date.now() >= ts_alarme) {
            alarme_tocando = true;
            som_alarme.play();
        }
    }
}

// Função para atualizar o relógio a cada segundo
const relógio = () => {
    const data = new Date();
    let horas = data.getHours();
    horas = horas < 10 ? '0' + horas : horas;

    let minutos = data.getMinutes();
    minutos = minutos < 10 ? '0' + minutos : minutos;

    let segundos = data.getSeconds();
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let hora_formatada = horas + ':' + minutos + ':' + segundos;
    div_relogio.innerHTML = hora_formatada;

    checarAlarme(); // Checa o alarme enquanto atualiza o relógio
}

setInterval(relógio, 1000);