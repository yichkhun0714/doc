---
title: Java基础 - 输入/输出和文件处理
---
## Java 输入/输出
Java 中的输入/输出（I/O）操作通常使用 `java.io` 包中的类来实现。该包中包含了多种类，可以用于处理不同类型的输入/输出数据，例如：

- `InputStream`：用于读取字节流数据；
- `OutputStream`：用于写入字节流数据；
- `Reader`：用于读取字符流数据；
- `Writer`：用于写入字符流数据。

### 字节流输入/输出
```java 
import java.io.*;

public class ByteIOExample {
    public static void main(String[] args) {
        try {
            // 写入数据到文件
            OutputStream os = new FileOutputStream("data.txt");
            os.write("Hello World".getBytes());
            os.close();
            
            // 从文件读取数据
            InputStream is = new FileInputStream("data.txt");
            int c;
            while ((c = is.read()) != -1) {
                System.out.print((char) c);
            }
            is.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

上述示例展示了如何使用字节流实现文件的读取和写入操作。其中，`OutputStream` 用于将字节流写入文件，`InputStream` 用于从文件中读取字节流。需要注意的是，在使用这些类时需要手动关闭流对象，以释放资源。

### 字符流输入/输出
```java 
import java.io.*;

public class CharIOExample {
    public static void main(String[] args) {
        try {
            // 写入数据到文件
            Writer writer = new FileWriter("data.txt");
            writer.write("Hello World");
            writer.close();
            
            // 从文件读取数据
            Reader reader = new FileReader("data.txt");
            int c;
            while ((c = reader.read()) != -1) {
                System.out.print((char) c);
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

上述示例展示了如何使用字符流实现文件的读取和写入操作。其中，`Writer` 用于将字符流写入文件，`Reader` 用于从文件中读取字符流。

### 字节流和字符流的区别
字节流和字符流是Java中用于进行输入/输出操作的两种基本流，它们的区别在于所处理的数据类型不同。

字节流是以字节为单位进行操作的流，可以处理所有类型的数据，包括文本、图片、音频和视频等二进制数据。它包括两个基本的抽象类：InputStream 和 OutputStream。InputStream 用于从输入流中读取数据，OutputStream 用于向输出流中写入数据。其中，InputStream 中提供了一系列以字节为单位读取数据的方法，如 read()、read(byte[] b) 等；OutputStream 中提供了一系列以字节为单位写入数据的方法，如 write(int b)、write(byte[] b) 等。

字符流是以字符为单位进行操作的流，只能处理文本类型的数据。它包括两个基本的抽象类：Reader 和 Writer。Reader 用于从输入流中读取字符数据，Writer 用于向输出流中写入字符数据。其中，Reader 中提供了一系列以字符为单位读取数据的方法，如 read()、read(char[] cbuf) 等；Writer 中提供了一系列以字符为单位写入数据的方法，如 write(int c)、write(char[] cbuf) 等。

另外，字节流和字符流之间可以相互转换。可以使用 InputStreamReader 类和 OutputStreamWriter 类将字节流转换为字符流，也可以使用 FileReader 类和 FileWriter 类直接操作文件中的字符数据。

在选择使用字节流还是字符流时，需要考虑所处理的数据类型以及所需的性能。如果需要处理文本类型的数据，建议使用字符流，因为字符流具有更高的效率和更好的字符处理能力。如果需要处理二进制类型的数据，或需要使用缓冲区读取数据，建议使用字节流。

### 表格总结
|        | 字节流                                           | 字符流                                           |
|--------|-------------------------------------------------|-------------------------------------------------|
| 数据类型   | 可以处理所有类型的数据，包括文本、图片、音频和视频等二进制数据 | 只能处理文本类型的数据                               |
| 抽象类    | InputStream 和 OutputStream                      | Reader 和 Writer                                 |
| 读取方法   | read()、read(byte[] b) 等                       | read()、read(char[] cbuf) 等                    |
| 写入方法   | write(int b)、write(byte[] b) 等                 | write(int c)、write(char[] cbuf) 等              |
| 转换方法   | 可以使用 InputStreamReader 和 OutputStreamWriter 类将字节流转换为字符流 | 可以使用 FileReader 和 FileWriter 类直接操作文件中的字符数据 |
| 推荐使用场景 | 处理二进制类型的数据，或需要使用缓冲区读取数据           | 处理文本类型的数据，具有更高的效率和更好的字符处理能力    |
## 文件处理
Java 中的文件处理通常使用 `java.io.File` 类来实现。该类提供了多种方法，可以用于创建、删除、重命名等操作。
### 创建文件
```java 
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        try {
            File file = new File("data.txt");
            if (file.createNewFile()) {
                System.out.println("文件创建成功");
            } else {
                System.out.println("文件已存在");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

上述示例展示了如何使用 `File` 类创建文件。需要注意的是，在使用该类创建文件时需要捕获 `IOException` 异常。

### 删除文件
```java 
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("data.txt");
        if (file.delete()) {
            System.out.println("文件删除成功");
        } else {
            System.out.println("文件删除失败");
        }
    }
}
```

上述示例展示了如何使用 `File` 类删除文件。需要注意的是，在使用该类删除文件时需要捕获 `SecurityException` 异常。

### 重命名文件
```java 
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("data.txt");
        File newFile = new File("newdata.txt");
        if (file.renameTo(newFile)) {
            System.out.println("文件重命名成功");
        } else {
            System.out.println("文件重命名失败");
        }
    }
}
```
上述示例展示了如何使用 `File` 类重命名文件。需要注意的是，在使用该类重命名文件时需要捕获 `SecurityException` 异常。

### 获取文件信息
```java 
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("data.txt");
        if (file.exists()) {
            System.out.println("文件名称：" + file.getName());
            System.out.println("文件路径：" + file.getPath());
            System.out.println("文件绝对路径：" + file.getAbsolutePath());
            System.out.println("文件父路径：" + file.getParent());
            System.out.println("文件大小：" + file.length());
            System.out.println("文件最后修改时间：" + file.lastModified());
            System.out.println("文件是否可读：" + file.canRead());
            System.out.println("文件是否可写：" + file.canWrite());
            System.out.println("文件是否隐藏：" + file.isHidden());
        } else {
            System.out.println("文件不存在");
        }
    }
}
```

上述示例展示了如何使用 `File` 类获取文件信息。需要注意的是，在使用该类获取文件信息时需要判断文件是否存在。


:::tip
注意事项
在进行输入/输出和文件处理操作时，需要注意以下事项：
- 需要手动关闭流对象，以释放资源；
- 需要捕获可能会出现的异常；
- 在进行文件处理操作时，需要判断文件是否存在。
:::