---
title: swift - 泛型
---
泛型（Generics）可以编写灵活且可重用的函数和类型。
```swift
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var intA = 1
var intB = 2
swapValues(&intA, &intB)
print("intA: \(intA), intB: \(intB)")

var stringA = "hello"
var stringB = "world"
swapValues(&stringA, &stringB)
print("stringA: \(stringA), stringB: \(stringB)")
```
## 泛型类型
我们可以创建泛型类型，例如泛型集合、泛型函数等。
```swift
struct Stack<Element> {
    private var items = [Element]()

    mutating func push(_ item: Element) {
        items.append(item)
    }

    mutating func pop() -> Element? {
        return items.popLast()
    }
}

var intStack = Stack<Int>()
intStack.push(1)
intStack.push(2)
print("弹出栈顶元素：\(intStack.pop()!)")
```