// 模拟 article 数据
var article = [];
var articleIndex = 0;
for (; articleIndex < 10000; articleIndex++) {
    article.push('新闻标题' + articleIndex)
}

var dom = null, // 缓存创建的新闻标题元素
    paper = 0, // 当前页数
    num = 5, // 每页显示新闻树木
    i = 0, // 创建新闻元素时保持变量
    len = article.length; // 新闻数据长度

// 初始化页面
for (; i < len; i++) {
    dom = document.createElement('div');
    dom.innerHTML  = article[i]; // 默认展示第一页的内容
    if (i >= num) {
        dom.style.display = 'none'; // 超出第一页新闻隐藏
    }
    document.getElementById('container').appendChild(dom);
}

// 下一页绑定数据
document.getElementById('next_page').onclick = function () {
    var div = document.getElementById('container').getElementsByTagName('div'),
    // 获取所有新闻标题包装元素
    j = k = n = 0; // j, k 循环变量，n 当前页显示的第一个新闻序号
    n = ++paper % Math.ceil(len / num) * num; // 获取当前页显示的第一个新闻序号
    for (; j < len; j++) {
        div[j].style.display = 'none'; // 隐藏所有新闻
    }
    for (; k < 5; k++) {
        if (div[n + k]) {
            div[n + k].style.display = 'block'; // 显示当前页新闻
        }
    }
}