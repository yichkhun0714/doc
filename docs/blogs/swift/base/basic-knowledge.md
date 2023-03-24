---
title: Swift - 基础知识
---
## 变量与常量
在Swift中，我们使用var关键字声明变量，使用let关键字声明常量。
```swift 
var age = 18 // 变量
let name = "Alice" // 常量
```
## 数据类型
Swift支持多种基本数据类型，如整数（Int）、浮点数（Float, Double）、布尔值（Bool）、字符串（String）和字符（Character）。
```swift
var integer: Int = 42
var float: Float = 3.14
var double: Double = 3.1415926
var boolean: Bool = true
var string: String = "Hello, Swift!"
var character: Character = "A"
```
## 类型推断与类型安全
Swift具有强大的类型推断功能，可以根据初始值自动推断变量或常量的类型。Swift是一种类型安全的语言，这意味着编译器会在编译时检查类型的正确性。
```swift
let number = 42 // 类型推断为Int
let pi = 3.14 // 类型推断为Double
```
## 可选类型
可选类型（Optional）是Swift中一种特殊的类型，表示一个值可能有值，也可能为`nil`。使用`?`来定义可选类型，使用`!`来强制解包，使用`nil`表示没有值。
```swift
var optionalString: String? = "Hello, Swift!"
optionalString = nil // 设置为nil

if let unwrappedString = optionalString {
    print("有值：\(unwrappedString)")
} else {
    print("没有值")
}
```

## 类型别名
使用`typealias`关键字为现有类型定义别名。
```swift
typealias Distance = Double

let distance: Distance = 42.0
```

## 元组
元组（Tuple）是Swift中一种复合类型，可以将多个值组合成一个值。元组中的值可以是不同类型。
```swift
let httpStatus = (code: 200, message: "OK")

print("HTTP状态码：\(httpStatus.code)")
print("HTTP消息：\(httpStatus.message)")
```