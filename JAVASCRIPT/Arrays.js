// Arrays

// como criar  um array?

let arr = ['Robson', 36, 1.70, true] //nome, idade, altura etc

// como acessar 

console.log('primeiro elemento:', arr[0])
console.log('segundo elemento:', arr[1])
console.log('terceiro elemento:', arr[2])
console.log('quarto elemento:', arr[3])

// como obter o tamanho do arrays

console.log(arr.length)

// percorrer arrays

for (let i = 0; i < 4; i++){ // para deixar interativo (let i = 0; i < arr.length; i++) ira pegar o valor que for adicionado no arr (let)
console.log(arr[i])
}

// segunda opção para percorrer o arrys

for (let elemento of arr) {  // estou pedindo para pecorrer a cada elemento arr
    console.log(elemento)
}

// terceira opção para pecorrer de dentro

for (let indice in arr) { // vo resultado vai ser 1, 2, 3, 4 ou seja o indice de cada elemento
    console.log(indice) // ou para saber do valor junto com o indice console.log(indice, arr[indice])
}