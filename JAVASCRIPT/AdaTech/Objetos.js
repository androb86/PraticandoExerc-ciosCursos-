// O Objeto é definido por chave e valor

// criando objeto

let pessoa = {
    nome: 'Robson',  // a chave se fosse 'nome-da-pessoa' deve colocar aspa e quando for buscar usar console.log(pessoa[''])
    idade: 26,

}

console.log(pessoa)
console.log(pessoa.nome) 
console.log(pessoa.idade)


//adicionamdo um par chave-valor
pessoa.altura = 1.70

//como remover um par chave-valor

delete pessoa.altura

// como percorrer

for (let chave in pessoa) {
    console.log(chave)
        
    }
     


