---
title: Java基础 - 线程和进程
---
## Java线程和进程
### 什么是线程和进程？
进程是操作系统中的一个概念，它代表了一个正在运行的程序实例，拥有独立的内存空间和资源，由操作系统进行调度和管理。一个进程可以包含多个线程，这些线程共享进程的内存空间和资源。

线程是进程中的一个执行单元，是操作系统进行调度的基本单位。线程可以看作是进程的一个子任务，它拥有独立的执行路径和栈空间，但是共享进程的内存空间和资源。

### 进程和线程的区别
- 进程是操作系统中的一个独立的执行单位，它有自己的内存空间和系统资源，可以包含多个线程。
- 线程是进程中的一个执行单元，一个进程中至少有一个线程。线程共享进程的内存空间和系统资源，是进程中的实际执行单位。

可以从以下几个方面来区分进程和线程：

| 区别   | 进程                                           | 线程                                           |
|------|-------------------------------------------------|-------------------------------------------------|
| 调度方式 | 采用操作系统的进程调度算法 | 采用自己的调度算法                               |
| 执行速度  | 较慢，切换时需要保存和恢复进程的上下文                      | 较快，切换时只需保存和恢复线程的上下文                                 |
| 内存和资源 | 每个进程都有自己独立的内存空间和系统资源                       | 线程共享进程的内存空间和系统资源                    |
| 并发性  | 进程之间相互独立，互不干扰                 | 线程之间共享进程的内存空间，需要注意同步和互斥问题              |
| 切换代价 | 切换代价大 | 切换代价小 |

### 创建线程的三种方式
1. 继承Thread类并重写run()方法
```java 
public class MyThread extends Thread {
    public void run() {
        System.out.println("This is a new thread extending Thread class.");
    }
}

// 创建并启动线程
MyThread myThread = new MyThread();
myThread.start();
```
2. 实现Runnable接口并重写run()方法
```java 
public class MyRunnable implements Runnable {
    public void run() {
        System.out.println("This is a new thread implementing Runnable interface.");
    }
}

// 创建线程
MyRunnable myRunnable = new MyRunnable();

// 创建并启动线程
Thread thread = new Thread(myRunnable);
thread.start();
```

3. 实现Callable接口并重写call()方法
```java 
public class MyCallable implements Callable<String> {
    public String call() {
        return "This is a new thread implementing Callable interface.";
    }
}

// 创建线程池
ExecutorService executorService = Executors.newSingleThreadExecutor();

// 提交任务并获得Future对象
Future<String> future = executorService.submit(new MyCallable());

// 获取结果并打印
try {
    System.out.println(future.get());
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}
```
其中，第一种方式继承Thread类比较简单，但是它有一个缺点，因为Java只支持单继承，所以如果已经继承了其他类，就无法使用这种方式创建线程。
第二种方式实现Runnable接口比较灵活，因为它可以实现多个接口，还可以把同一个Runnable实例传递给多个线程使用。
第三种方式实现Callable接口，相比前两种方式，具有以下优点：
- 可以返回执行结果
- 可以抛出异常
- 支持泛型
需要注意的是，Callable接口在Java 5中才被引入，而Runnable接口和Thread类在Java 1.0就已经存在。不过大家现在在用的JDK一般都1.7、1.8以上了，不太会存在这个问题。

### 线程的状态
在Java中，线程有以下几种状态：
1. 新建状态（New）：当用new关键字创建一个Thread对象时，该线程处于新建状态。此时，它还没有开始运行，也还没有分配系统资源。
2. 就绪状态（Runnable）：当调用线程的start()方法后，线程进入就绪状态。此时，线程已经分配好了系统资源，但还没有开始执行，等待CPU的调度。
3. 运行状态（Running）：当CPU开始执行线程的run()方法时，线程进入运行状态。此时，线程真正开始执行，并且可以执行一些计算密集型或者IO密集型的任务。
4. 阻塞状态（Blocked）：当线程等待某些事件的发生时，它进入阻塞状态。例如，等待用户输入、等待IO操作完成等。阻塞状态下的线程不会占用CPU资源。
5. 等待状态（Waiting）：当线程执行了Object.wait()、Thread.join()或LockSupport.park()方法后，它进入等待状态。等待状态下的线程不会占用CPU资源。
6. 超时等待状态（Timed Waiting）：当线程执行了Thread.sleep()、Object.wait(timeout)、Thread.join(timeout)或LockSupport.parkNanos()方法后，它进入超时等待状态。在指定的时间内，等待状态下的线程不会占用CPU资源。
7. 终止状态（Terminated）：当线程执行完run()方法后，它进入终止状态。此时，线程停止运行，释放所有资源。

需要注意的是，线程状态之间是可以相互转换的，例如，从就绪状态转换到运行状态、从运行状态转换到阻塞状态等等。线程状态的转换是由JVM自动管理的。另外，在多线程程序中，由于线程是并发执行的，因此线程状态可能会比较复杂，需要仔细考虑线程之间的交互与同步问题。