---
title: Java基础 - 序列化和反序列化
---

## 什么是序列化和反序列化
Java中的序列化是指将Java对象转换为字节序列，以便在网络上传输或在程序之间传递。而反序列化则是将字节序列转换回Java对象。

序列化和反序列化在Java中是通过`ObjectOutputStream`和`ObjectInputStream`类实现的。可以将一个对象写入到输出流中进行序列化，也可以从输入流中读取字节序列并将其反序列化为一个Java对象。

## 序列化的实现
要实现序列化，需要满足以下条件：

1. 类必须实现`Serializable`接口，该接口没有任何方法，仅用于标识可序列化。
2. 所有成员变量必须是可序列化的，如果一个成员变量不是可序列化的，则必须将其标记为`transient`。

下面是一个简单的示例：
```java 
import java.io.Serializable;

public class Person implements Serializable {
    private String name;
    private int age;
    private transient String password;

    public Person(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getPassword() {
        return password;
    }
}
```

在这个示例中，`Person`类实现了`Serializable`接口，并包含三个成员变量。其中，`password`变量被标记为`transient`，因为密码通常不应该被序列化。

现在可以将一个`Person`对象序列化为字节数组：

```java 
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class SerializationExample {
    public static void main(String[] args) throws IOException {
        Person person = new Person("Alice", 25, "password");

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
        objectOutputStream.writeObject(person);
        objectOutputStream.flush();

        byte[] byteArray = byteArrayOutputStream.toByteArray();
        System.out.println("Serialized object: " + new String(byteArray));
    }
}
```

这个示例中，使用`ObjectOutputStream`类将`person`对象写入`byteArrayOutputStream`中，并将其转换为字节数组。注意，`ObjectOutputStream`类的`writeObject()`方法是序列化Java对象的主要方法。

## 反序列化的实现
反序列化过程比序列化过程稍微复杂一些。需要从字节数组中创建一个输入流，然后使用`ObjectInputStream`类将输入流反序列化为Java对象。
下面是一个示例：
```java 
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class DeserializationExample {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        byte[] byteArray = /* get serialized object byte array from somewhere */ ;

        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(byteArray);
        ObjectInputStream objectInputStream = new ObjectInputStream(byteArrayInputStream);
        Object obj = objectInputStream.readObject();
        Person person = (Person) obj;

        System.out.println("Deserialized object:");
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Password: " + person.getPassword());
    }
}
```

这个示例中，使用`ByteArrayInputStream`类将字节数组转换为输入流，并使用`ObjectInputStream`类将其反序列化为Java对象。请注意，`ObjectInputStream`类的`readObject()`方法是反序列化Java对象的主要方法。

## 序列化的注意事项
在Java中进行序列化时，需要注意以下事项：
1. 序列化的对象必须实现`Serializable`接口，否则将抛出`NotSerializableException`。
2. 所有成员变量必须是可序列化的，如果一个成员变量不是可序列化的，则必须将其标记为`transient`。
3. 序列化后的字节序列包含对象的所有信息，包括私有字段和方法。因此，在序列化敏感数据时要特别小心。

## 反序列化的注意事项
在Java中进行反序列化时，需要注意以下事项：
1. 反序列化的类必须存在，并且必须与序列化时的类相同，否则将抛出InvalidClassException。
2. 反序列化时必须使用相同的JVM版本，否则可能会出现不兼容问题。
3. 反序列化可能会触发构造函数，因此在设计可序列化类时应该小心。


## 常见的应用场景
Spring Boot默认使用Jackson库来进行Java对象和JSON之间的序列化和反序列化操作。因此，当我们使用Spring Boot创建一个Web API时，Spring Boot会自动将我们的Java对象转换为JSON格式的字符串，并将其返回给客户端。

在Spring Boot中，我们可以使用`@RestController`注解来创建一个Web API，该API可以将Java对象序列化为JSON或XML格式的字符串，并将其返回给客户端。Spring Boot默认使用Jackson库来进行序列化和反序列化操作。

例如，下面的示例演示了如何使用Spring Boot将Java对象序列化为JSON字符串：
```java 
@RestController
public class MyController {
    
    @GetMapping("/my-object")
    public MyObject getMyObject() {
        MyObject obj = new MyObject();
        obj.setName("John");
        obj.setAge(30);
        return obj;
    }
    
    // Other controller methods...
}

public class MyObject {
    private String name;
    private int age;
    // getters and setters...
}
```

在上面的代码中，我们创建了一个简单的Spring Boot控制器，该控制器将`MyObject`对象序列化为JSON格式的字符串并返回给客户端。Spring Boot默认使用Jackson库来完成这项任务。

当客户端调用`/my-object`接口时，它将收到一个JSON格式的响应，如下所示：
```json
{
    "name": "John",
    "age": 30
}
```
总之，Spring Boot中提供了支持Java序列化和反序列化的机制，开发者可以很容易地将Java对象转换为JSON或XML格式的字符串，并在Web应用中返回给客户端。 

除了默认的Jackson库，Spring Boot还支持其他的序列化和反序列化库，例如Gson、XML、YAML等。开发者可以根据自己的需求选择适合的库进行序列化和反序列化操作。