module.exports = {
    '/blogs/java/': [
        {
            title: 'Java基础知识',   // 一级菜单名称
            collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            // sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [
                ['base/variable.md', 'Java基础 - 变量、常量'],
                ['base/dataType.md', 'Java基础 - 数据类型'],
                ['base/operators.md', 'Java基础 - 运算符和表达式'],
                ['base/control.md', 'Java基础 - 控制流程语句（if-else、for等）'],
                ['base/function.md', 'Java基础 - 方法和函数'],
                ['base/array-collection.md', 'Java基础 - 数组与集合'],
                ['base/oop.md', 'Java基础 - 面向对象与三大特性封装、继承、多态'],
                ['base/interface.md', 'Java基础 - 接口和抽象类'],
                ['base/exception.md', 'Java基础 - 异常处理和调试'],
                ['base/input-output.md', 'Java基础 - 输入/输出和文件处理'],
                ['base/serialization.md', 'Java基础 - 序列化和反序列化'],
                ['base/thread.md', 'Java基础 - 线程和进程'],
                ['base/synchronized.md', 'Java基础 - 并发编程中的同步和互斥'],
                ['base/reflection.md', 'Java基础 - 反射'],
            ]
        },
    ],
    '/blogs/redis/': [
        {
            title: 'Redis',   // 一级菜单名称
            collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            // sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [
                ['redis-String.md', 'Redis字符串（String）'],
                ['redis-key.md', 'Redis键(key)'],
                ['redis-List.md', 'Redis列表（List）'],
            ]
        },
    ],
    '/blogs/swift/': [
        {
            title: 'Swift',   // 一级菜单名称
            collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            // sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [
                ['base/basic-knowledge.md', 'swift - 基础知识'],
                ['base/control-flow.md', 'swift - 控制流'],
                ['base/collection-type.md', 'swift - 集合类型'],
                ['base/functions-and-closures.md', 'swift - 函数与闭包'],
                ['base/enums-and-structs.md', 'swift - 枚举与结构体'],
                ['base/classes-and-objects.md', 'swift - 类与对象'],
                ['base/error-handling.md', 'swift - 错误处理'],
                ['base/protocols-and-extensions.md', 'swift - 协议与扩展'],
                ['base/generic.md', 'swift - 泛型'],
            ]
        },
    ],
}