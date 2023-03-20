---
title: Java基础 - 控制流程语句（if-else、for等）
---
## 控制流程语句
### if-else语句
`if-else`语句用于根据特定条件执行不同的代码块。如果条件为真，则执行if语句块中的代码；否则，执行`else`语句块中的代码。

```java 
if (condition) {
    // 如果条件为真，执行这里的代码
} else {
    // 如果条件为假，执行这里的代码
}
```

:::tip
注意事项
- 条件必须是布尔类型
- `else`语句块是可选的
- 只有在条件为`true`时，才会执行`if`语句块中的代码，否则会执行`else`语句块中的代码
:::

### for循环
`for`循环用于重复执行特定的代码块，通常用于迭代数组或集合中的元素。`for`循环有三个部分：初始化、条件和迭代器。

```java 
for (initialization; condition; iterator) {
    // 循环体
}
```

```java 
//示例 这段代码会打印出0到9的数字。
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

:::tip
注意事项
- 初始化和迭代器部分都是可选的
- 条件必须是布尔类型
- `for`循环内部的变量作用域仅限于循环内部
:::

### while循环

`while`循环用于重复执行代码块，只要条件为真。通常用于执行某个任务直到满足特定条件为止。
```java 
while (condition) {
    // 循环体
}
```
```java 
//示例 这段代码会打印出0到9的数字
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

:::tip
注意事项
- 条件必须是布尔类型
- `while`循环中的变量作用域是循环外部
:::

### do-while循环
`do-while`循环与`while`循环类似，但它会先执行一次循环体，然后再检查条件是否为真。只有在条件为真时，才会重复执行循环体。

```java 
do {
    // 循环体
} while (condition);
```
```java 
//示例 这段代码会打印出0到9的数字。
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 10);
```

:::tip
注意事项
- 条件必须是布尔类型
- `do-while`循环中的变量作用域是循环外部
- 循环体至少会执行一次
:::

### switch语句
`switch`语句用于根据特定值执行不同的代码块。它可以替代使用多个`if-else`语句的情况。
```java 
switch (expression) {
    case value1:
        // 执行代码块1
        break;
    case value2:
        // 执行代码块2
        break;
    ...
    default:
        // 执行默认代码块
}
```
```java 
//示例 这段代码会打印出Wednesday，因为day的值为3。
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}
```
:::tip
注意事项
- `switch`语句中的表达式必须是整数、枚举类型或字符串类型
- 每个`case`语句都必须以`break`关键字结尾，否则会继续执行下一个`case`语句
- 可以使用`default`关键字指定当表达式的值与所有`case`语句的值都不匹配时要执行的代码块
:::

### break和continue语句
`break`和`continue`语句用于控制循环的流程。

- `break`语句用于立即退出循环
- `continue`语句用于跳过当前循环的剩余部分，继续执行下一次循环

```java 
//示例 这段代码会打印出1、3和7。
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // 退出循环
    }
    if (i % 2 == 0) {
        continue; // 跳过当前循环，继续下一次循环
    }
    System.out.println(i);
}
```

:::tip
注意事项
- `break`和`continue`语句只能在循环语句（`for`、`while`、`do-while`）中使用
- `break`和`continue`语句只影响当前循环，不影响外部循环
:::

### return语句
`return`语句用于从方法中返回值。它可以是任何数据类型，包括基本类型和对象类型。
```java 
return value;
```
```java 
//示例 这个方法会返回a和b的和。
public int add(int a, int b) {
    return a + b;
}
```
:::tip
注意事项
- 在方法中使用`return`语句时，必须确保方法返回值的类型与方法声明的返回类型相匹配
- `return`语句用于退出方法，因此在`return`语句后面的代码永远不会被执行
:::