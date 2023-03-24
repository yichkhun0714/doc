---
title: swift - 枚举与结构体
---
## 枚举
枚举（Enum）是一种定义一组相关值的方式，可以使代码更易读和安全。枚举可以具有关联值和原始值。
```swift
enum CompassPoint {
    case north
    case south
    case east
    case west
}

var direction = CompassPoint.north

switch direction {
case .north:
    print("向北")
case .south:
    print("向南")
case .east:
    print("向东")
case .west:
    print("向西")
}

// 带关联值的枚举
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

let productBarcode = Barcode.upc(8, 85909, 51226, 3)

switch productBarcode {
case let .upc(numberSystem, manufacturer, product, check):
    print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")
case let .qrCode(productCode):
    print("QR code: \(productCode)")
}

// 带原始值的枚举
enum ASCIIControlCharacter: Character {
    case tab = "\t"
    case lineFeed = "\n"
    case carriageReturn = "\r"
}

let tabCharacter = ASCIIControlCharacter.tab.rawValue
```

## 结构体
结构体（Struct）是一种自定义数据结构，可以包含属性和方法。结构体具有自动生成的成员逐一构造器。
```swift
struct Point {
    var x: Double
    var y: Double

    func distance(to other: Point) -> Double {
        let deltaX = x - other.x
        let deltaY = y - other.y
        return sqrt(deltaX * deltaX + deltaY * deltaY)
    }
}

let point1 = Point(x: 3, y: 4)
let point2 = Point(x: 6, y: 8)

let distance = point1.distance(to: point2)
print("两点间距离：\(distance)")
```