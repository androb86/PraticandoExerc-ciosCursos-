fun main() {
    println(whenAssign("hello"))
    println(whenAssign(3.4))
    println(whenAssign(1))
    println(whenAssign(MyClass()))
}

fun whenAssign(obj: Any): Any {
    val result = when (obj) {             // 1
        1 -> "one"                        // 2
        "hello" -> 1                      // 3
        is long -> false                  // 4
        else -> 42                        // 5
    }
    return result
}

    class MyClass