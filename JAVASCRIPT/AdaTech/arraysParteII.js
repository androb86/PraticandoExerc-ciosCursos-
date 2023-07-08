// quando uso metodos coloco parenteses nele

const arr1 = [30, 12, 45, 34, 29]

// fatiamento: slice

console.log(arr1.slice(0, 2)) // vc define inicio ex: 0 e o fim, o resultado é 30, 12

console.log(arr1.slice(2)) // vc define somente o inicio e não o fim neste caso fica 45, 34,29

// adicionando elementos: push | unshift

let arr2 = []

console.log('antes de adicionar', arr2) // resultado vazio

arr2.push(10, 20) // sempre vai jogar no final do arrays

console.log('depois de adicionar', arr2)

// unshift

arr2.unshift(0) // vai inserir no começo do array

//removend elementos com o pop | shift

arr2.pop() // vai remover o ultimo elemento
arr2.shift() // remove o primeiro elemento

// concatenando arrays: cancat

// juntar uma coisa só

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))

//buscando o elemento no array: indexOf | lastIndexOf

let indiceDoElemento34 = arr1.indexOf(34)// vou procurar o indece do elemento 34 resultado é 3

console.log(indiceDoElemento34)// se for procurar pelo elemento 35 resultado -1 (não existe)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3 .indexOf(3)) // o indice sera o 2

console.log(arr3.lastIndexOf(3))// para saber qual é o ultimo indice do arr3 usa lastIndexOf o valor vai imprimir o indice 5 

// como saber se um elemento esta dentro de um arrays: includes


console.log(arr1.includes(10)) // vai retornar false, pois não existe 10 no arr1 

// invertendo o array : reverse

console.log('arr1 normal', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)