---
title: swift - 类与对象
---
## 类定义与初始化
类（Class）是一种引用类型，可以包含属性和方法。类需要实现构造器（Initializer）进行初始化。
```swift
class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func sayHello() {
        print("Hello, my name is \(name), I am \(age) years old.")
    }
}

let person = Person(name: "Alice", age: 30)
person.sayHello()
```
## 存储属性与计算属性
类可以具有存储属性和计算属性。计算属性不直接存储值，而是提供一个getter和一个可选的setter来间接获取和设置其他属性或变量的值。
```swift
class Circle {
    var radius: Double
    var diameter: Double {
        get {
            return radius * 2
        }
        set {
            radius = newValue / 2
        }
    }

    init(radius: Double) {
        self.radius = radius
    }
}

let circle = Circle(radius: 5)
print("半径：\(circle.radius), 直径：\(circle.diameter)")

circle.diameter = 10
print("半径：\(circle.radius), 直径：\(circle.diameter)")
```
## 属性观察器
属性观察器会在属性值发生变化时触发。我们可以为属性添加`willSet`和`didSet`观察器。
```swift
class Counter {
    var count = 0 {
        willSet(newCount) {
            print("即将设置值：\(newCount)")
        }
        didSet {
            print("已设置值：\(count)")
        }
    }
}

let counter = Counter()
counter.count = 5
```
## 类继承与重写
类可以继承另一个类，从而获得其属性和方法。子类可以通过`override`关键字重写父类的方法。
```swift
class Vehicle {
    var speed: Double = 0.0

    func description() -> String {
        return "时速：\(speed) km/h"
    }
}

class Car: Vehicle {
    var gear: Int = 1

    override func description() -> String {
        return super.description() + ", 档位：\(gear)"
    }
}

let car = Car()
car.speed = 60.0
car.gear = 3
print(car.description())
```
## 类型转换
我们可以使用`is`和`as`操作符进行类型检查和类型转换。
```swift
class Animal {}
class Dog: Animal {}
class Cat: Animal {}

let animals: [Animal] = [Dog(), Cat(), Dog()]

for animal in animals {
    if animal is Dog {
        print("是狗")
    } else if animal is Cat {
        print("是猫")
    }
}

if let dog = animals[0] as? Dog {
    print("第一个动物是狗")
}
```
## 类型属性与类型方法
类型属性是所有实例共享的属性，类型方法是在类型本身上调用的方法。使用`static`关键字声明类型属性和类型方法。
```swift
class Math {
    static let pi = 3.1415926

    static func square(_ x: Double) -> Double {
        return x * x
    }
}

let pi = Math.pi
let squareOfTwo = Math.square(2.0)
```