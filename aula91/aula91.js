const objetos = document.getElementById('objetos');

const computador = {
    cpu:'i9',
    ram:'64gb',
    hd:'2tb',
    ssd:'500gb',
    info:function(){
        console.log(`CPU:${this.cpu}`);
        console.log(`RAM:${this.ram}`);
        console.log(`HD:${this.hd}`);
        console.log(`SSD:${this.ssd}`);
    }
}
const computadores = [{
    cpu:'i9',
    ram:'64gb',
    hd:'2tb',
    ssd:'500gb'
},
{
    cpu:'i10',
    ram:'128gb',
    hd:'5tb',
    ssd:'2tb'
},
{
    cpu:'i12',
    ram:'256gb',
    hd:'12tb',
    ssd:'6tb'
}];
// console.log(computador)
// objetos.innerHTML = JSON.stringify(computador);
// computador.info();
computadores.forEach((e)=>{
    // objetos.innerHTML += JSON.stringify(e) + '<br>'

    const div = document.createElement('div');
    div.innerHTML = JSON.stringify(e) + '<br>'
    objetos.appendChild(div)
})