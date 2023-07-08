/* laço Numerico

const input = require('readline-sync');

// O problema
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + norta2 + nota3) / 3

console.log(media)

// Acumulador

let acumulador = 0;

acumulador = acumulador + 10;  //acumulador recebe ele que é (0) + 10

acumulador = acumulador + 2;  //acumulador recebe ele que é (10) + 2 resultado 12 

/*posso fazer de outra :

acumulador += 10 (ou seja somo nesta mesma variavel e soma e atribui o += 10  ) posso usar outras operações + - * /

acumulador += 2 o resultado vai ser o mesmo 12

posso usar o ++ assim:

acumulador++ o resultado é 13 
dessa forma ela representa que esta somando uma unidade dentro da variavel


estrutura for
  (let i = ) letra i significa iteração, mas pde ser outro nome, assim podendo ser possivel repetir vai dizer quantas vezes vai acontecer, depois inserir quantas vezes vai repetir, e por fim quando é inserido i++ acrscenta mais uma unidade e evita loop infinito


 (let i = 0; i < 10; i++) => vai começar no zero (i = 0;) vai repetir quando i < 10 (i for menor que 10) e vai somar i++ 1 unidade na variavel, assim evita o loop infinito
*/

const input = require('readline-sync');

/*for (let i = 0; i < 10; i++){
console.log('Repetição')
}

for (let i = 12; i > 8; i--){
console.log('Repetição', i)
}
*/ 

let nota;
let soma = 0;  // não influencia no calculo, ver o exemplo acumulador

for (let i = 1; i <=3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))   // ` ${}` templete string

    soma = soma + nota // ver exemplo acumulador
}

console.log(`A Média do Aluno é : ${soma / 3}.`);