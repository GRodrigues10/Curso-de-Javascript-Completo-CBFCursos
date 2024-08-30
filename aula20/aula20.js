function nome(name){
    return name;
}

console.log(nome('Gabriel'))




function soma(n1, n2){ return n1 + n2};
console.log(soma(4, 5))

function mudarNome(){
    let n1 = document.getElementById('d1');
    let n2 = document.getElementById('d2');
    let n3 = document.getElementById('d3');
    n1.innerHTML = 'Jorgão';
    n2.innerHTML = 'Cursoooooo';
    n3.innerHTML = 'Typescript';
}


let btn = document.getElementById('mudar');
btn.addEventListener('click', mudarNome)

