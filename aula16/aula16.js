// LOOP - FOR(Definidos).


// For:



let a = [2, 4, 6, 7];


for(num of a){
    console.log(num);
}

for(num in a){
    console.log(a[num]);
}



console.log(...a)

for(let i = 0; i < a.length; i++){
    console.log(a[i])
}


const objs = document.getElementsByTagName('div');

for(ob of objs){
    console.log(ob)
}
