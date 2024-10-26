const vader = [...document.getElementsByClassName('vader')];

let x = 0
let y = 0


window.addEventListener('mousemove', (e)=>{
    x = e.clientX;
    y = e.clientY;

    const rotação = Math.atan2(x, y) * 180/Math.PI;// Retorna o arco tangente de dois coeficientes(x e y) - retorna radiano, tem que converter para graus:* 180/Math.PI;
    
    vader.forEach((o)=>{
        o.style.transform = "rotate("+ rotação +" deg)";
    });
});
