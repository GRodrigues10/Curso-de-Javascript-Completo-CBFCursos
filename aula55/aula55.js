// Set - Não permita entrada duplicadas de valores.

let musicas = new Set(['Música 1', 'Música Boa', 'Música 10']);

musicas.add('Música do BALACOBACO');
musicas.add('Música do BALACOBACO');//O Set não vai deixar essa repetição, o programa roda mas a repetição não entra na coleção.

musicas.delete('Música 1')
// musicas.clear() - Para limpar o Set.


console.log(musicas);
const caixa = document.getElementById('caixa');
musicas.forEach((el)=>{
    caixa.innerHTML += el
});
