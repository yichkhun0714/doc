---
title: Swift - 协议与扩展
---
## 协议
协议（Protocol）是一种定义方法和属性的蓝图。类、结构体和枚举可以遵循协议以提供所需的功能。
```swift
protocol Identifiable {
    var id: String { get }
}

class User: Identifiable {
    var id: String

    init(id: String) {
        self.id = id
    }
}

func displayID(thing: Identifiable) {
    print("ID: \(thing.id)")
}

let user = User(id: "12345")
displayID(thing: user)
```

## 扩展
扩展（Extension）可以为现有的类型添加新的功能，例如方法和计算属性。
```swift
extension Int {
    var isEven: Bool {
        return self % 2 == 0
    }
}

let number = 6
print("6是偶数？ \(number.isEven)")
```