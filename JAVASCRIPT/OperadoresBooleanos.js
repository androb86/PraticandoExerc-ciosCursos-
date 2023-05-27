const numero = 10

console.log(numero == 10)  // igual  (resultado: true)
console.log(numero != 20)  // desigual (resultado: true), console.log('numero' !== 20) neste caso vai comparar os tipos que são string e numeros
console.log(numero > 20)  // maior que  (resultado: false)
console.log(numero >= 20)  // maior ou igual  (resultado: false)
console.log(numero < 20)  // menor que   (resultado: true)
console.log(numero <= 20)  // menor ou igual   (resultado: true)

console.log(numero == '10') /*(resultado: true) porque o javascript ele vai caulcular o conteudo e não o tipo, para comparar o tipo usa === quando rodar no console vai dar false, pq um é tipo numero e o outro é tipo string.*/

console.clear()


//conjução logicas

/* ex: preciso ter 18 anos para tirar cnh, ou seja preciso de fatores ou mais para que seja verdade, como por exemplo : ter 18 anos + tirar a cnh = para obter a cnh*/

//e and => &&

let idade = 17;
let tenhoCnh = true;

const possoDirigir = idade >= 18 && tenhoCnh === true;

console.log(possoDirigir)


// or => || 

idade = 40; // reatribuido o valor idade

const votoFacultativo = idade < 18 || idade >= 70; // em votação menores de 16 e maiores de 70 não precisa votar

// NOT => !

const estouGostandoDoCurso = false;

console.log(estouGostandoDoCurso) /*(resultado vai dar false) se colocar ! (!estouGostandoDoCurso) o resultado vai ser verdadeiro.*/