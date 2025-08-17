/*
4. Implemente uma função calculadora(a, b, operação) que realiza as
operações +, -, * e /.
*/

function calculator(numberA, numberB, operation){
    switch (operation) {
        case '+':
            return numberA + numberB;
        case '-':
            return numberA - numberB;
        case '*':
            return numberA * numberB;
        case '/':
            if(numberB == 0 ){
                return 'Do not divide by zero!';
            }
            return numberA/numberB;
        default:
            break;
    }
}

console.log(calculator(1,2, '+'));
console.log(calculator(3,5, '-'));
console.log(calculator(3,5, '*'));
console.log(calculator(4,2, '/'));
console.log(calculator(4, 0, '/'));