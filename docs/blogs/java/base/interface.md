---
title: Java基础 - 接口和抽象类
---
# Java 接口和抽象类
Java 接口和抽象类都是实现代码复用和多态性的重要手段。在本文中，我们将详细讨论这两种抽象机制，包括它们的定义、用法、注意事项和示例。

## 接口
接口是一种只有方法声明、常量和默认方法的抽象类型。它可以被类或其他接口实现，并且可以用来定义对象的行为契约。接口中定义的所有方法都是公共的，不包含方法体。接口中的常量必须是 public、static 和 final 的，而默认方法必须是 public 的。接口不能被实例化，但是可以使用实现了该接口的类的实例。

接口的定义语法如下：
```java 
public interface MyInterface {
    // 常量
    public static final int MY_CONSTANT = 42;
    
    // 抽象方法
    public void doSomething();
    
    // 默认方法
    public default void doSomethingElse() {
        System.out.println("Doing something else.");
    }
}
```

:::tip
注意事项：
- 接口中的所有方法都是公共的，所以不需要使用 `public` 关键字。
- 接口中的常量必须是 `public`、`static` 和 `final` 的，所以可以省略这些关键字。
- 接口中的方法不能有方法体，否则会编译错误。
- 实现接口的类必须实现接口中定义的所有方法，包括默认方法。
:::

下面是一个实现接口的示例：
```java 
public class MyClass implements MyInterface {
    public void doSomething() {
        System.out.println("Doing something.");
    }
    
    // 如果不重写默认方法，就会继承 MyInterface 中的默认方法
    // public void doSomethingElse() {
    //     System.out.println("Doing something else.");
    // }
}

MyInterface obj1 = new MyClass();
obj1.doSomething();         // 输出：Doing something.
obj1.doSomethingElse();     // 输出：Doing something else.
```

## 抽象类

抽象类是一种不能被实例化的类，它只能被继承。抽象类可以包含抽象方法、常量、变量和普通方法，但是它们中的抽象方法没有方法体。抽象类可以用来定义某些共性的方法和属性，但是不能被实例化。

抽象类的定义语法如下：

```java 
public abstract class MyAbstractClass {
    // 常量
    public static final int MY_CONSTANT = 42;
    
    // 抽象方法
    public abstract void doSomething();
    
    // 普通方法
    public void doSomethingElse() {
        System.out.println("Doing something else.");
    }
}
```

:::tip
注意事项：
- 抽象类可以包含普通方法，但是抽象方法不能有方法体。
- 抽象类不能被实例化，但是可以使用继承它的子类的实例。
- 抽象类的子类必须实现抽象类中的所有抽象方法，否则子类也必须声明为抽象类。
:::

下面是一个继承抽象类的示例：
```java 
public class MyClass extends MyAbstractClass {
    public void doSomething() {
        System.out.println("Doing something.");
    }
}

MyAbstractClass obj1 = new MyClass();
obj1.doSomething();         // 输出：Doing something.
obj1.doSomethingElse();     // 输出：Doing something else.
```

## 接口 vs 抽象类

接口和抽象类都可以用来实现代码复用和多态性，但是它们之间有以下区别：

- 接口只能包含方法声明、常量和默认方法，而抽象类可以包含变量、普通方法和抽象方法。
- 类只能继承一个抽象类，但是可以实现多个接口。
- 接口中的所有方法都是公共的，而抽象类中的方法可以有不同的访问修饰符和抽象程度。
- 实现接口的类必须实现接口中定义的所有方法，包括默认方法，而继承抽象类的子类只需要实现抽象方法。
- 接口中的常量必须是 `public`、`static` 和 `final` 的，而抽象类中的常量可以有不同的访问修饰符和不同的值。

在实践中，接口通常用于定义类型间的协议，而抽象类通常用于实现继承关系中的共性代码。

## 总结
Java 接口和抽象类都是实现代码复用和多态性的重要手段。接口只包含方法声明和常量，不能包含实现代码；抽象类可以包含普通方法和实现代码。一个类只能继承一个抽象类，但是可以实现多个接口。抽象类可以有构造器，接口不能有构造器。在实践中，接口通常用于定义类型间的协议，而抽象类通常用于实现继承关系中的共性代码。