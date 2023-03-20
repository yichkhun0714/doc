---
title: Java基础 - 数组与集合
---
## Java数组
Java数组是一组同类型的元素的容器。数组可以存储基本类型数据，如 int、float、double、boolean等，也可以存储对象。
### 声明数组
在Java中，声明一个数组需要指定数组的类型、数组的名称和数组的大小。以下是声明一个数组的语法：
```java 
dataType[] arrayName = new dataType[arraySize];
```
例如，声明一个包含5个整数的数组：
```java 
int[] myArray = new int[5];
```
### 初始化数组
在Java中，数组可以通过以下两种方式进行初始化：
1. 静态初始化

静态初始化在声明数组时完成。以下是静态初始化的语法：
```java 
dataType[] arrayName = {value1, value2, value3, ..., valueN};
```
例如，声明一个包含三个整数的数组，并进行静态初始化：
```java 
int[] myArray = {10, 20, 30};
```
2. 动态初始化

动态初始化是在声明数组之后，通过循环或其他逻辑分配数组空间并初始化数组元素。以下是动态初始化的语法：
```java 
dataType[] arrayName = new dataType[arraySize];
for (int i = 0; i < arraySize; i++) {
    arrayName[i] = value;
}
```
例如，声明一个包含五个整数的数组，并进行动态初始化：
```java 
int[] myArray = new int[5];
for (int i = 0; i < 5; i++) {
    myArray[i] = i * 10;
}
```
### 访问数组元素
在Java中，可以通过数组的索引来访问数组元素。数组的索引从0开始，最大值为数组长度减1。以下是访问数组元素的语法：
```java 
arrayName[index]
```
例如，访问myArray数组的第一个元素：
```java 
int firstElement = myArray[0];
```

:::tip
注意事项
- Java数组的大小是固定的，一旦创建就无法改变大小。如果需要增加或删除元素，需要创建一个新数组。
- 数组越界访问会抛出ArrayIndexOutOfBoundsException异常。
:::


## Java集合
Java集合是Java类库中的一个重要部分，提供了一组框架，用于存储和操作对象。与数组不同，Java集合可以动态增加和缩小其大小，可以存储不同类型的对象。

Java集合框架包括三个主要接口：

- Collection：一组对象，可以包含重复对象。
- List：有序的集合，可以包含重复对象。
- Set：不允许重复的集合。

### ArrayList
ArrayList是Java集合框架中的一个常用类，它实现了List接口，可以存储任意类型的对象。ArrayList使用数组实现，可以动态增加和缩小其大小。
#### 声明ArrayList
在Java中，声明一个ArrayList需要指定ArrayList的类型。以下是声明一个整数类型的ArrayList：
```java 
ArrayList<Integer> myArrayList = new ArrayList<Integer>();
```
#### 初始化ArrayList
在Java中，可以通过以下两种方式进行初始化ArrayList：

1. 静态初始化

静态初始化在声明ArrayList时完成。以下是静态初始化的语法：
```java 
ArrayList<dataType> arrayName = new ArrayList<dataType>(Arrays.asList(value1, value2, value3, ..., valueN));
```
例如，声明一个包含三个整数的ArrayList，并进行静态初始化：
```java 
ArrayList<Integer> myArrayList = new ArrayList<Integer>(Arrays.asList(10, 20, 30));
```
2.  动态初始化

动态初始化是在声明ArrayList之后，通过add()方法添加元素。以下是动态初始化的语法：
```java 
arrayListName.add(value);
```
例如，声明一个空的ArrayList，并进行动态初始化：
```java 
ArrayList<Integer> myArrayList = new ArrayList<Integer>();
myArrayList.add(10);
myArrayList.add(20);
myArrayList.add(30);
```
#### 访问ArrayList元素
在Java中，可以通过索引或迭代器来访问ArrayList元素。以下是访问ArrayList元素的语法：
```java 
arrayListName.get(index);
```
例如，访问myArrayList的第一个元素：
```java 
int firstElement = myArrayList.get(0);
```

:::tip
注意事项
- ArrayList的大小可以动态增加和缩小，使用add()方法添加元素，使用remove()方法删除元素。
- ArrayList可以存储不同类型的对象。
- 需要注意ArrayList的线程安全问题，如果多个线程同时访问同一个ArrayList对象，可能会导致数据不一致问题。可以考虑使用Vector或Collections.synchronizedList()方法解决线程安全问题。
:::

### HashMap
HashMap是Java集合框架中的一个常用类，它实现了Map接口，用于存储键值对。HashMap使用哈希表实现，可以快速查找和访问元素。
#### 声明HashMap
在Java中，声明一个HashMap需要指定键和值的类型。以下是声明一个键为字符串类型，值为整数类型的HashMap：
```java 
HashMap<String, Integer> myHashMap = new HashMap<String, Integer>();
```
#### 初始化HashMap
在Java中，可以通过以下两种方式进行初始化HashMap：

1. 静态初始化

静态初始化在声明HashMap时完成。以下是静态初始化的语法：
```java 
HashMap<keyType, valueType> mapName = new HashMap<keyType, valueType>() {{
    put(key1, value1);
    put(key2, value2);
    put(key3, value3);
    ...
    put(keyN, valueN);
}};
```
例如，声明一个包含三个键值对的HashMap，并进行静态初始化：
```java 
HashMap<String, Integer> myHashMap = new HashMap<String, Integer>() {{
    put("apple", 1);
    put("banana", 2);
    put("orange", 3);
}};
```
2. 动态初始化

动态初始化是在声明HashMap之后，通过put()方法添加键值对。以下是动态初始化的语法：
```java 
HashMap<String, Integer> myHashMap = new HashMap<String, Integer>();
myHashMap.put("apple", 1);
myHashMap.put("banana", 2);
myHashMap.put("orange", 3);
```
#### 访问HashMap元素
在Java中，可以通过键来访问HashMap中的元素。以下是访问HashMap元素的语法：
```java 
mapName.get(key);
```
例如，访问myHashMap中键为"apple"的元素：
```java 
int value = myHashMap.get("apple");
```

:::tip
注意事项
- HashMap中的键和值可以为任意对象，但是需要保证键的唯一性，值可以重复。
- HashMap的大小可以动态增加和缩小，使用put()方法添加键值对，使用remove()方法删除键值对。
- 需要注意HashMap的线程安全问题，如果多个线程同时访问同一个HashMap对象，可能会导致数据不一致问题。可以考虑使用ConcurrentHashMap或Collections.synchronizedMap()方法解决线程安全问题。
:::

### HashSet
HashSet是Java集合框架中的一个常用类，它实现了Set接口，用于存储不重复的元素。HashSet使用哈希表实现，可以快速查找和访问元素。
#### 声明HashSet
在Java中，声明一个HashSet需要指定元素的类型。以下是声明一个字符串类型的HashSet：
```java 
HashSet<String> myHashSet = new HashSet<String>();
```
#### 初始化HashSet
在Java中，可以通过以下两种方式进行初始化HashSet：

1. 静态初始化

静态初始化在声明HashSet时完成。以下是静态初始化的语法：
```java 
HashSet<elementType> setName = new HashSet<elementType>(Arrays.asList(value1, value2, value3, ..., valueN));
```
例如，声明一个包含三个字符串的HashSet，并进行静态初始化：
```java 
HashSet<String> myHashSet = new HashSet<String>(Arrays.asList("apple", "banana", "orange"));
```
2. 动态初始化

动态初始化是在声明HashSet之后，通过add()方法添加元素。以下是动态初始化的语法：
```java 
setName.add(value);
```
例如，声明一个空的HashSet，并进行动态初始化：
```java 
HashSet<String> myHashSet = new HashSet<String>();
myHashSet.add("apple");
myHashSet.add("banana");
myHashSet.add("orange");
```
#### 访问HashSet元素
在Java中，可以通过迭代器或for-each循环来访问HashSet中的元素。以下是访问HashSet元素的语法：
```java 
for (elementType element : setName) {
    // do something with element
}
```
例如，遍历myHashSet中的所有元素：
```java 
for (String element : myHashSet) {
    System.out.println(element);
}
```
:::tip
注意事项
- HashSet中的元素必须是唯一的，不能重复。
- HashSet的大小可以动态增加和缩小，使用add()方法添加元素，使用remove()方法删除元素。
- 需要注意HashSet的线程安全问题，如果多个线程同时访问同一个HashSet对象，可能会导致数据不一致问题。可以考虑使用ConcurrentHashSet或Collections.synchronizedSet()方法解决线程安全问题。
:::