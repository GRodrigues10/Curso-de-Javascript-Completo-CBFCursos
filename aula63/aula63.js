
const militar = document.querySelector("#f_tipoMilitar");
const normal = document.querySelector("#f_tipoNormal");
const btnAddCarro = document.querySelector("#btn_addCarro");
const carrosDiv = document.querySelector(".carros");

btnAddCarro.addEventListener('click', () => {
    const nome = document.querySelector("#f_nome").value;
    const portas = parseInt(document.querySelector("#f_portas").value, 10);
    const blindagem = parseInt(document.querySelector("#f_blindagem").value, 10);
    const municao = parseInt(document.querySelector("#f_municao").value, 10);
    const tipo = document.querySelector("input[name='f_tipo']:checked")?.value;

    let carro;

    if (tipo === 'm') {
        carro = new Militar(nome, portas, blindagem, municao);
    } else {
        carro = new Utilitario(nome, portas, false); 
    }

  
    const carroDiv = document.createElement('div');
    carroDiv.classList.add('carro');
    carroDiv.innerHTML = `
        <p>Nome: ${carro.nome}</p>
        <p>Portas: ${carro.portas}</p>
        <p>Cor: ${carro.cor || 'Não definido'}</p>
        ${tipo === 'm' ? `<p>Blindagem: ${carro.blindagem}</p><p>Munição: ${carro.municao}</p>` : ''}
    `;
    
    carrosDiv.appendChild(carroDiv);
});

class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    setCor(cor) {
        this.cor = cor;
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor('Verde');
    }
    atirar() {
        if (this.municao > 0) {
            this.municao--;
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, arcondicionado) {
        super(nome, portas);
        this.arcondicionado = arcondicionado;
    }
}