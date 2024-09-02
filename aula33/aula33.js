// QuerySelector: Retorna um uníco elemento
// QuerySelectorAll: Retorna uma coleção de elementos

// const divTodos = [...document.querySelector('.curso')];
const divTodosAll = [...document.querySelectorAll('.curso')];

// Itera sobre cada elemento do array e altera seu conteúdo
divTodosAll.map((e) => {
    e.innerHTML = 'QuerySelector';
});



