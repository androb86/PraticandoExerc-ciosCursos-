class Animal(val name: String)

class Zoo(val animals: List<Animal>) {

    Operator fun iterator(): Iterator<animal> {                 // 1
    return animals.iterator()                                   // 2
    }
}

fun main() {

    val zoo = Zoo(listOf(Animal("zebra"), Animal("lion")))
    
    for (animal in zoo) {                                      // 3
        println("Watch out, it's a ${animal.name}")
    }
}