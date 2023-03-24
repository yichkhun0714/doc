---
title: swift - 集合类型
---
# 集合类型
## 数组
数组（Array）是有序的值的集合。可以使用字面量和泛型语法来创建数组。    
```swift
// 创建数组
var numbers: [Int] = [1, 2, 3, 4, 5]

// 添加元素
numbers.append(6)

// 访问元素
let firstNumber = numbers[0]

// 修改元素
numbers[0] = 42

// 移除元素
numbers.remove(at: 0)
```
## 集合
集合（Set）是无序且唯一的值的集合。可以使用泛型语法创建集合。
```swift
// 创建集合
var colors: Set<String> = ["red", "green", "blue"]

// 添加元素
colors.insert("yellow")

// 移除元素
colors.remove("red")

// 遍历集合
for color in colors {
    print(color)
}
```
## 字典
字典（Dictionary）是一种键值对的集合，可以使用字面量和泛型语法来创建字典。
```swift
// 创建字典
var scores: [String: Int] = ["Alice": 85, "Bob": 90, "Charlie": 95]

// 访问值
let aliceScore = scores["Alice"]

// 修改值
scores["Alice"] = 100

// 移除值
scores.removeValue(forKey: "Alice")
```