## Redis字符串（String）

### 简介
String是Redis最基本的数据类型，一个key对应一个value。
String类型是二进制安全的，意味着Redis的String可以包含任何数据。比如jpg图片或者序列化的对象。
一个Redis字符串value最多可以是512M。
### 常用命令
set <key> <value> 添加键值对
get <key> 查询对应键值
append <key> <value> 将给定的<value>追加到原值的末尾
strlen <key> 获得值的长度
setnx <key><value> 只有key不存在时 设置key的值

incr <key>
将key中储存的数字值加1 只能对数字值操作，如果为空，新增值为1
decr <key>
将key中储存的数字值减1 只能对数字值操作，如果为空，新增值为-1
incr/decr <key><步长> 将key中储存的数字值增减，自定义步长

mset <key1> <value1> <key2> <value2> ……
同时设置一个或多个key-value对
mget <key1> <key2> <key3> ……
同时获取一个或多个value
msetnx <key1> <value1> <key2> <value2> ……
同时设置一个或多个key-value对，当且仅当所有给定key都不存在
《原子性，有一个失败则都失败》

getrange <key> <起始位置> <结束位置>
获得值的范围，类似java中的surbstring
setrange <key> <起始位置> <value>
用<value>覆写<key>所存储的字符串值，从<起始位置>开始（索引从0开始）

setex <key> <过期时间> <value>
设置键值的同时，设置过期时间，单位秒
getset <key> <value>
以新换旧，设置了新值同时获得旧值