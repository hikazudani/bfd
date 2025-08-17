/*
3. Imprima os números de 1 a 100, mas:
    ● Para múltiplos de 3, imprima "Fizz"
    ● Para múltiplos de 5, imprima "Buzz"
    ● Para múltiplos de ambos, imprima "FizzBuzz"
*/


function isDivisibleBy(number, input){
    return input % number === 0
}

function printFizzBuzz(input){
    isMod3 = isDivisibleBy(3, input);
    isMod5 = isDivisibleBy(5, input);
    if(isMod3 && isMod5)
        console.log(`FizzBuzz`)
    else if (isMod3)
        console.log(`Fizz`)
    else if (isMod5)
        console.log(`Buzz`)
    else
        console.log(input);
}

function FizzBuzz(){
    for(let i = 1; i <=100; i++){
        printFizzBuzz(i);
    }
}

FizzBuzz();