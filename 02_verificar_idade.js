/*
. Crie uma função que receba um objeto com nome e idade, e diga se a pessoa é
maior de idade ou não.
*/

function verificarIdade(pessoa){
    console.log(`${pessoa.nome} é ${pessoa.idade<18? "menor": "maior"} de idade.`)
}

// Teste unitário:
verificarIdade({nome: "Joaquim", idade: 5})
verificarIdade({nome: "Rubens", idade:18})