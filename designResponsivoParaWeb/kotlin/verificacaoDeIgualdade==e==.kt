fun main() {
    val authors = setOf("shakespeare", "Hemingway", "Twain")
    val writers = setOf("Twain", "shakespeare", "Hemingway")

    println(authors == writers) //1
    println(authors === writers) //2
}