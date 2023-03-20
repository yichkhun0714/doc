---
title: Java基础 - 面向对象与三大特性封装、继承、多态
---
## 面向对象编程简介
`面向对象`编程是一种程序设计范式，它将程序中的数据和操作数据的方法打包在一起，形成一个称为对象的实体。每个对象都可以接收其他对象的消息，并根据其自身的状态和行为作出响应。Java是一种面向对象编程语言，因此，Java程序员使用面向对象编程的概念和技术来编写Java程序。

## Java中的类和对象
在Java中，类是一种定义对象属性和行为的蓝图或模板。它定义了对象的状态和行为。对象是类的实例。它们有状态，行为和标识。例如，可以定义一个名为`Car`的类，该类可以描述汽车的状态和行为。对于每个汽车实例，该类的对象可以具有不同的状态和行为。

以下是Java中定义`Car`类的示例：
```java 
public class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public void start() {
        System.out.println("The " + make + " " + model + " starts.");
    }

    public void stop() {
        System.out.println("The " + make + " " + model + " stops.");
    }
}
```

在上面的代码中，我们定义了一个名为`Car`的类，该类具有属性（`make`，`model`和`year`）和方法（`getMake`，`getModel`，`getYear`，`start`和`stop`）。构造函数`Car（String，String，int）`用于创建`Car`对象，并初始化`make`，`model`和`year`属性。

## 封装、继承和多态
### 封装
当我们编写一个类时，可以使用封装将类的数据和方法隐藏起来，只暴露一些公共的接口来与外界交互。这样可以保证对象的安全性和稳定性。

在上面的示例中，我们将`make`、`model`、`year`声明为私有变量，并提供了`getMake`和`setMake`等方法来访问和修改make属性。由于`make`是私有的，外部无法直接访问和修改，只能通过公共的方法来操作。这就保证了`Car`对象的数据安全性和稳定性。

### 继承
继承是Java面向对象编程中的一个重要概念。它允许一个类继承另一个类的属性和方法。这使得代码重用更加容易，并使代码更具扩展性。在Java中，一个类可以通过使用`extends`关键字来继承另一个类。

以下是继承的示例：
```java 
public class SportsCar extends Car {
    public SportsCar(String make, String model, int year) {
        super(make, model, year);
    }

    public void turboBoost() {
        System.out.println("The " + getMake() + " " + getModel() + " is turbo boosted!");
    }
}
```

在上面的代码中，我们定义了一个名为`SportsCar`的类，该类继承自`Car`类。它添加了一个名为`turboBoost`的方法，该方法输出一个消息表示汽车正在进行涡轮增压。

### 多态
多态是Java面向对象编程的另一个重要概念。它允许不同的对象对同一消息做出不同的响应。在Java中，多态是通过使用重写和重载来实现的。

以下是多态的示例：
```java 
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Corolla", 2022);
        SportsCar mySportsCar = new SportsCar("Porsche", "911", 2022);

        myCar.start();
        mySportsCar.start();

        myCar.stop();
        mySportsCar.stop();

        mySportsCar.turboBoost();
    }
}
```

在上面的代码中，我们创建了一个名为`myCar`的`Car`对象和一个名为`mySportsCar`的`SportsCar`对象。然后，我们调用了它们的`start`和`stop`方法。由于`SportsCar`类继承自`Car`类，因此它可以使用`Car`类的`start`和`stop`方法。最后，我们调用了`mySportsCar`的`turboBoost`方法，它是`SportsCar`类特有的方法。

:::tip
注意事项
在使用Java面向对象编程时，有一些注意事项需要考虑：

- 将代码划分为类和对象，以提高代码的可维护性和可重用性。
- 确保使用封装将类的属性和方法保护起来，以防止不必要的外部访问和修改。
- 继承是一种强大的概念，但应该谨慎使用，因为它可能会导致代码的复杂性和耦合度增加。
- 多态可以使代码更加灵活和可扩展，但必须小心地使用，以避免出现运行时错误和不必要的性能问题。
:::


## 面向对象与三大特性之间的关系
`面向对象`是一种程序设计的思想，它将问题看作是由各个对象之间的相互作用和协作来解决的。`面向对象`的程序设计中，`封装`、`继承`和`多态`是三个非常重要的概念，它们之间有紧密的联系。

- `封装`是指将一个对象的内部数据和方法隐藏起来，只暴露出一些公共的接口来与外界交互。这样可以保证对象的安全性和稳定性。
- `继承`是指一个类可以从另一个类继承属性和方法。
- `多态`是指同一个方法在不同的对象上具有不同的实现方式。

`封装`、`继承`和`多态`是`面向对象`程序设计的三个基本特性，它们之间的关系如下：

- `封装`是面向对象程序设计的基础，它可以实现数据的隐藏和保护，使得对象的数据和方法只能通过特定的接口进行访问和修改。
- `继承`可以将一个类的属性和方法传递给另一个类，从而使得代码的重用和维护更加方便。
- `多态`可以让不同的对象调用同一个方法，得到不同的结果，这可以提高程序的灵活性和可扩展性。

总之，`封装`、`继承`和`多态`是`面向对象`程序设计中非常重要的三个概念，它们之间有着密切的联系和相互作用。只有深入理解和掌握这些概念，才能够写出高质量的面向对象程序。