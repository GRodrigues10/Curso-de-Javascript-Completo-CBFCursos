const data = new Date();
// console.log(Date.now());//Timestamp

const data_r = data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear();
const div_data = document.getElementById('div-data');
div_data.innerHTML = data_r

console.log(data.getDate());// Dia do mês
console.log(data.getDay());// Dia da semana
console.log(data.getFullYear());// Ano com 4 dígitos
console.log(data.getHours());// Horas
console.log(data.getMilliseconds());// Milisegundos
console.log(data.getMinutes());// Minutos
console.log(data.getSeconds());// Segundos ...




// setDate() = Define um dia para a data.
// setMonth() = Define um mês para a data.
// setFullYear() = Define um ano para a data.
// setHours() = Define horas.
// setDate() = Define minutos.
// setSeconds() = Define segundos.
// setMiliSeconds() = Define Milisegundos.
// toDateString() = Retorna somente a data.
