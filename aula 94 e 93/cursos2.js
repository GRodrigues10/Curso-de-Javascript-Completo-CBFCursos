const cursos = ['Javascript', 'Python', 'Java', 'PHP']
const cursosParágrafo = document.getElementById('cursos');


function getFullCursos(){
    cursos.forEach((e)=>{
        cursosParágrafo.innerHTML += e + '<br>'
    })
}

export {cursos,getFullCursos}