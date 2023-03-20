module.exports = [
    //格式一：直接跳转，'/'为不添加路由，跳转至首页
    {text: '首页', link: '/'},
    //格式二：添加下拉菜单，link指向的文件路径
    {
        text: '后端',  //默认显示
        ariaLabel: '分类',   //用于识别的label
        items: [
            {text: 'Java - 基础知识', link: '/blogs/java/base/variable.md'},
            //点击标签会跳转至link的markdown文件生成的页面
            // {text: 'Test', link: '/blogs/java/base/test.md'},
            // {text: 'Redis', link: '/blogs/redis/redis-String.md'},
        ]
    },
    // {
    //     text: '算法',  //默认显示
    //     ariaLabel: '分类',   //用于识别的label
    //     items: [
    //         {text: '剑指offer', link: '/blogs/algorithm/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof.md'},
    //     ]
    // },
    //格式三：跳转至外部网页，需http/https前缀
    {
        text: '博客',
        ariaLabel: '博客',   //用于识别的label
        items: [
            {text: 'Github', link: 'https://github.com/yichkhun0714'},
            {text: '掘金', link: 'https://juejin.cn/user/1583775608472199'},
            {text: '知乎', link: 'https://www.zhihu.com/people/su-yi-kun-i'},
            {text: '思否', link: 'https://segmentfault.com/u/yichkhun/articles'},
            {text: 'CSDN', link: 'https://blog.csdn.net/qq_39083821?type=blog'},
        ]
    },
]