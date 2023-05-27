const idade = 20;

if (idade >= 10) {
    console.log('voce é maior de idade!')
}else {
    console.log('voce é menor de idade!')
}


// se media >= 7, aprovado;
//se media < 7 e media >=5, recuperação
// se media < 5, reprovado

let media = 10;

if (media >= 7) {
    console.log('Aprovado')
} else if (media >= 5) {    //else if (media < 7 && media >= 5) ou pode ser dessa forma
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
