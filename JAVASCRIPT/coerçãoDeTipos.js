// coerção (conversão) de tipos

// coerção ecplicita => manual 

const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormaoDeString = String(numero); // dessa forma com a Letra inicial S (maior) converte em string
console.log(numeroEmFormaoDeString, typeof numeroEmFormaoDeString);

console.log(Number('1234567'));
console.log(parseFloat('23224.234'));
console.log(parseInt('23224.234')); // converte em numero inteiro
console.log(Boolean(1)); // se colocar o zero (0) ficara false, colocando o numero 1 se converte em verdadeiro.
console.clear()

// coarção implicita (automatica)

console.log('10' + 1); // ele vai concatenar

console.log('10' - 1); /* neste caso ele entendo que não faz logica subtrair com string, e sim converte em numero para fazer o calculo e assim se vale para a multiplicação e divisão*/

console.log(10 - 'asasa') // vai retornar como NaN (não é numero)

//exercicio
let n = 1 + '1'; // string 11

n = n - 1; // resultado 10 (numero)

console.log(n)

console.log(2 + 3 + 4 + '5'); // 95
console.log('5' + 2 + 3 + 4); // resultado string 5234
console.log("10" - "4" - "3" - 2 + "5"); // resultado 15 (numero)


