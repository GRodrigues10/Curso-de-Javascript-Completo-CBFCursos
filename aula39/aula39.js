const caixa1 = document.querySelector('#caixa1');
const btn_c = document.querySelectorAll('.curso');

console.log(caixa1.hasChildNodes()); // Verifica se caixa1 possui nós filhos
console.log(btn_c[0].hasChildNodes()); // Verifica se o primeiro elemento com a classe 'curso' possui nós filhos
console.log(btn_c[0].childNodes); // Corrigido: Acessa todos os nós filhos (inclui texto, comentários, etc.)
console.log(btn_c[0].children); // Corrigido: Acessa todos os elementos filhos (somente elementos, sem texto ou comentários)

if (btn_c[0].children.length > 0) {
    console.log('Possui filhos.');
} else {
    console.log('Não possui filhos');
}

caixa1.children[3].innerHTML = 'teste'; // Modifica o conteúdo HTML do segundo filho de caixa1