const url = document.getElementById('url');
const btn_url = document.getElementById('btn_url');

btn_url.addEventListener('click', (evt)=>{
    // window.location = 'https://www.google.com.br';
    // window.location.replace('https://www.google.com.br');//Em algumas ocasions ele vai exlcuir a url do histórico e substituir pela a que vc deseja
    // window.location.assign('https://www.google.com.br');// Faz a mesma coisa mais não remove a url corrente.
    // window.location.reload('https://www.google.com.br');// Recarrega a página.
    // window.history.back();//Volta no histórico, ou seja... algo anterior no histórico.
    // window.history.forward();//Avança no histórico, ou seja... algo posterior no histórico.
    // window.history.go(1);// Vai para a página pra frente dependendo do número dentro do parêntesis.
    // console.log(window.history.length);
    window.location = url.value
    
})