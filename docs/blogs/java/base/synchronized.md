---
title: Java基础 - 并发编程中的同步和互斥
---
## 同步和互斥的关系
同步和互斥不是一个意思。它们是相关但不同的概念。

同步是指协调多个线程以便它们能够按照特定的顺序执行，以避免数据竞争和其他并发问题。同步的目的是确保线程之间协调一致，从而避免出现不一致的结果。

互斥是指控制对共享资源的访问，以确保在任何时候只有一个线程可以访问共享资源。互斥的目的是防止多个线程同时访问共享资源，从而避免出现数据不一致的情况。

在Java中，同步和互斥通常一起使用。同步机制可以确保在多个线程之间正确地协调和同步操作，而互斥机制可以确保在任何给定时间只有一个线程访问共享资源。这可以帮助确保线程之间的顺序正确，并避免并发问题。

### 同步
使用`synchronized`关键字来同步方法或代码块，以确保多个线程可以正确地协调和同步它们的操作。
```java 
public class Example {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
```
在这个示例中，`increment()`和`getCount()`方法都被`synchronized`关键字修饰，这意味着只有一个线程可以访问这些方法。这确保了`count`变量的值始终保持同步，以避免竞态条件。

### 互斥
使用`synchronized`关键字或`Lock`接口来实现互斥，以确保在任何时候只有一个线程可以访问共享资源。
```java 
public class Example {
    private final Object lock = new Object();
    private int count = 0;

    public void increment() {
        synchronized (lock) {
            count++;
        }
    }

    public int getCount() {
        synchronized (lock) {
            return count;
        }
    }
}
```
在这个示例中，`increment()`和`getCount()`方法都使用了`synchronized`关键字来确保只有一个线程可以访问共享资源（即`count`变量）。另一种实现互斥的方法是使用`Lock`接口。例如：
```java 
public class Example {
    private final Lock lock = new ReentrantLock();
    private int count = 0;

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }

    public int getCount() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }
}
```
在这个示例中，increment()和getCount()方法都使用了ReentrantLock对象来控制对共享资源的访问。使用try-finally语句块来确保在访问资源后正确地释放锁。