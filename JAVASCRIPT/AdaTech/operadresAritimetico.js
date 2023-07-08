/*não pode iniciar com: numeros, ex: '1numero'  e começar a variavel com letras minusculas, usar como boa pratica camel case  */ 



let numero1 = 20; 
let numero2 = 2;

const soma = numero1 + numero2;

console.log('soma =', soma)
console.log('subtração =', numero1 - numero2)
console.log('multiplicação =', numero1 * numero2)
console.log('divisão =', numero1 / numero2)
console.log('exponenciação =', numero1 ** numero2)
console.log('resto divisão =', numero1 % numero2)

// precedencia de operadores

console.log(3 + 7 * 3) /* regra de matematica primeiro vai resolver a mltiplicação para depois somar, se adicionar o '()' ex (3 + 7) * 3  neste caso será reslvido primeiro o que estiver  entre parenteses.*/

console.log((10 + 7 + 8) / 3) /* neste exemplo estamos somando uma media de tres notas que esta entre parenteses e depois vai fazer a divisão*/

//bibblioteca Math

console. console.log(Math.PI); // vai calcular o pi
console.log(Math.sqrt(16)) //calcular a raiz quadrada