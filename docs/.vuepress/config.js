module.exports = {
    theme: 'reco',
    title: '易困Yichkhun', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '不再流浪.', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ['link', {rel: 'icon', href: '/logo.webp'}],
        // 移动栏优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ],

    themeConfig: {
        // 备案
        record: '浙ICP备18039320号',
        recordLink: 'https://beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2018',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        noFoundPageByTencent: false, //关闭腾讯公益
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        logo: '/logo.webp',  //网页顶端导航栏左上角的图标
        //顶部导航栏
        nav: require('./nav'),
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: require('./sidebar'),
    },
    markdown: {
        lineNumbers: true//代码显示行号
    },
}