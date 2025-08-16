/*
4. Implemente uma função calculadora(a, b, operação) que realiza as
operações +, -, * e /.
*/

function calculadora(a, b, operacao){
    switch (operacao) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a*b;
        case '/':
            if(b == 0 ){
                return 'Não dividirás por zero!';
            }
            return a/b;
        default:
            break;
    }
}

console.log(calculadora(1,2, '+'));
console.log(calculadora(3,5, '-'));
console.log(calculadora(3,5, '*'));
console.log(calculadora(4,2, '/'));
console.log(calculadora(4, 0, '/'));