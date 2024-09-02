// getElementByTagName: Retorna uma HTML COLLECTION

let elements = document.getElementsByTagName('div');

elements = [...elements]

elements.map((e)=>{
    e.innerHTML ='Mudou';
})