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

const s_json_pesssoa = JSON.stringify(pessoa);
const o_json_pesssoa = JSON.stringify(pessoa);
console.log(pessoa)
console.log(s_json_pesssoa)
console.log(o_json_pesssoa)