fun main () {
    cases("Hello")
    Cases(1)
    Cases(0l)
    Cases(Myclass())
    Cases("hello")

    fun cases(obj: Any) {
        when (obj) {                              // 1
            1 -> println("One")                   // 2
            "Hello" -> println("Greeting")        // 3
            is long -> println("Long")            // 4
            !is String -> println("Not a string") // 5
            else -> println("Unknown")            // 6
        }
    }

    class MyClass
}