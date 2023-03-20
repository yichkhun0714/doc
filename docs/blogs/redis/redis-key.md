## Redis键(key)

### 简介


### 常用命令
>keys * 

查看当前库所有key
>exists key 

判断某个key是否存在
>type key 

查看你的key是什么类型

>del key 

删除指定的key数据
>unlink key 

根据value选择非阻塞删除
仅将keys从key space元数据中删除，真正的删除会在后续异步操作

>expire key 10 

为给定的key设置10秒过期时间
>ttl key 

查看还有多少秒过期，-1表示永不过期，-2表示已过期

>select 

<font color=red>命令切换数据库</font>
>dbsize 

查看当前数据库的key的数量

>flushdb 

清空当前库
>flushall 

通杀全部库