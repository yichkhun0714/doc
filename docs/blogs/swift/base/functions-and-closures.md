---
title: swift - 函数定义与调用
---
## 函数定义与调用
在Swift中，使用`func`关键字定义函数。函数可以有参数和返回值。
```swift
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

let greeting = greet(name: "Alice")
print(greeting)
```
## 函数参数与返回值
函数可以有多个参数和多个返回值（使用元组）。
```swift
func calculate(a: Int, b: Int) -> (sum: Int, difference: Int, product: Int) {
    let sum = a + b
    let difference = a - b
    let product = a * b
    return (sum, difference, product)
}

let result = calculate(a: 5, b: 3)
print("和：\(result.sum), 差：\(result.difference), 积：\(result.product)")
```

## 函数类型
函数是一等公民，可以赋值给变量或常量。函数类型由参数类型和返回值类型组成。
```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

func multiply(a: Int, b: Int) -> Int {
    return a * b
}

var operation: (Int, Int) -> Int
operation = add
print("5 + 3 = \(operation(5, 3))")

operation = multiply
print("5 * 3 = \(operation(5, 3))")
```
## 嵌套函数
在Swift中，可以在函数内部定义另一个函数。
```swift
func incrementGenerator(step: Int) -> (Int) -> Int {
    func increment(number: Int) -> Int {
        return number + step
    }
    return increment
}

let incrementByTwo = incrementGenerator(step: 2)
print("5 incremented by 2 is \(incrementByTwo(5))")
```

## 闭包表达式
闭包（Closure）是一种自包含的代码块，可以捕获和存储其上下文中的变量和常量。闭包表达式是一种轻量级的闭包声明方式。
```swift
let numbers = [1, 3, 2, 5, 4]
let sortedNumbers = numbers.sorted(by: { (a: Int, b: Int) -> Bool in
    return a < b
})
print(sortedNumbers)
```

## 尾随闭包
当闭包作为函数的最后一个参数时，可以使用尾随闭包语法。
```swift
let doubledNumbers = numbers.map { (number: Int) -> Int in
    return number * 2
}
print(doubledNumbers)
```

## 值捕获
闭包可以捕获其上下文中的值。
```swift
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0

    let incrementer: () -> Int = {
        total += incrementAmount
        return total
    }

    return incrementer
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
print("第一次调用：\(incrementByTwo())")
print("第二次调用：\(incrementByTwo())")
```

## 逃逸闭包
当闭包在函数返回后执行时，需要使用`@escaping`修饰符标记闭包参数。
```swift
func someFunctionWithEscapingClosure(completionHandler: @escaping () -> Void) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
        completionHandler()
    }
}

someFunctionWithEscapingClosure {
    print("逃逸闭包在1秒后执行")
}
```