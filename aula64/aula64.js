// Objetos 

const pessoa = {
    nome:'Gabriel',
    canal:'CFB Cursos',
    curso: 'Javascript',
    aulas:{
        aula01:'Introdução',
        aula02:'Variáveis',
        aula03:'Condicional'
    }
}

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.aulas)

const string_pessoa = '{"nome":"Gabriel","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}'

const s_json_pesssoa = JSON.stringify(pessoa);//Converte objeto em string json
const o_json_pesssoa = JSON.stringify(pessoa);// Converte string json em objeto
console.log(pessoa)
console.log(s_json_pesssoa)
console.log(o_json_pesssoa)