//laços condicionais

const input = require('readline-sync') //vai importar dados

const numero_sorteado = 5;

let numero = Number ( input.question('Qual o numero voce escolhe?') ) /* quando der o console.log(numero, typeof numero) e inserir um numero no terminal vai ler como string, pra ler como number tem que converter const numero = Number( input.question('Qual o numero voce escolhe?') ). */

while (numero !== numero_sorteado) {    // equanto o numero !==(diferente) do numero_sorteado, vai imprimir Voce errou o numero
    console.log('Voce errou o numero. Tente novamente...')

    numero = Number( input.question('Qual o numero voce escolhe?') )
}

console.log("Voce Acertou!!")


