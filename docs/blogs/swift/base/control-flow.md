---
title: swift - 控制流
---
## 条件语句
在Swift中，我们可以使用`if`、`else`和`else if`来编写条件语句。
```swift
let temperature = 25

if temperature < 10 {
    print("太冷了！")
} else if temperature >= 10 && temperature < 20 {
    print("有点凉！")
} else {
    print("天气很好！")
}
```
## 循环
Swift支持`for-in`、`while`和`repeat-while`循环。
```swift
// for-in 循环
for i in 1...5 {
    print("\(i) times 5 is \(i * 5)")
}

// while 循环
var number = 1
while number <= 5 {
    print("\(number) times 5 is \(number * 5)")
    number += 1
}

// repeat-while 循环
number = 1
repeat {
    print("\(number) times 5 is \(number * 5)")
    number += 1
} while number <= 5

```
## 控制语句
Swift中有`break`和`continue`等控制语句，用于在循环中改变执行流程。
```swift
// break 语句
for number in 1...10 {
    if number == 5 {
        break // 结束循环
    }
    print("Number is \(number)")
}

// continue 语句
for number in 1...10 {
    if number % 2 == 0 {
        continue // 跳过本次循环
    }
    print("Odd number is \(number)")
}
```
## 模式匹配
Swift的`switch`语句支持模式匹配，可以方便地匹配不同的值或条件。
```swift
let score = 85

switch score {
case 90...100:
    print("优秀")
case 80..<90:
    print("良好")
case 60..<80:
    print("及格")
default:
    print("不及格")
}
```