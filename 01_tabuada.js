/*
1. Crie uma variável e atribua um número e, depois mostre na console a tabuada de
multiplicação desse número (de 1 a 10).
*/

function tabuada(numero){
    for(let i = 1; i<=10; i++){
        console.log(` ${numero} x ${i} = ${numero*i} `)
    }
}

tabuada(3);