
function multiplier(number){
    const result = [];

    for(let i = 1; i<=10; i++){
        result.push(number*i);
    }

    return result;
}


function showMultiplicationTable(number){
    const resultArray = multiplier(number);

    for(const [i, value] of resultArray.entries()){
        console.log(`${number} x ${i + 1} = ${value}`);
    }
}

let number = 3

showMultiplicationTable(number);
