const objetos = document.getElementById('objetos');

const computador = {
    cpu:'',
    ram:'',
    hd:'',
    ssd:'',
    info:function(){
        console.log(`CPU:${this.cpu}`);
        console.log(`RAM:${this.ram}`);
        console.log(`HD:${this.hd}`);
        console.log(`SSD:${this.ssd}`);
    }
}
delete(computador)
console.log(computador);

const c2 = Object.create(computador);
c2.cpu = 'i9';
c2.ram = '32gb';
c2.hd = '2tb';
c2.ssd = '1tb';
c2.info();

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

const c1 = Object.assign({}, computador);//Clonando o computador
c1.info();
const o1 = {obj1:'1'};
const o2 = {obj2:'2'};
const o3 = {obj3:'3'};

const o4 = Object.assign({},o1, o2, o3);
console.log(o4);

// console.log(computador)
// objetos.innerHTML = JSON.stringify(computador);
// computador.info();
computadores.forEach((e)=>{
    // objetos.innerHTML += JSON.stringify(e) + '<br>'

    const div = document.createElement('div');
    div.innerHTML = JSON.stringify(e) + '<br>'
    objetos.appendChild(div)
})