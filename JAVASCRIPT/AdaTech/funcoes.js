//Funções

// definição de função:
function saudacao(){
    console.log('Olá seja Bem Vinda (o) ao nosso curso de javascript')
}

saudacao()

function saudacao(nome, curso='Javascript') {   //modo default quando não passa parametos (curso)  quando adicionado por exemplo Javascript, quando chamar mostrará javascript como padrão
    console.log(nome)
    console.log(`Olá, ${nome} seja Bem Vinda (o) ao nosso curso de ${curso}`)
}

saudacao('Robson', 'HTML & CSS')

// retorno da função:

function soma(numero1, numero2) {
    return numero1 + numero2
} 

const resultado = soma(10, 20) // posso guardar a soma na variavel resultado para o uso posterior

console.log(resultado / 2)

function maiorDoQue50(numero) {
    if (numero > 50) {

    }

    return false
}