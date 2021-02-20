// 模拟 article 数据
var article = [];
var articleIndex = 0;
for (; articleIndex < 1000; articleIndex++) {
    article.push('新闻标题' + articleIndex + 1)
}

var dom = null, // 缓存创建的新闻标题元素
    parent = 0, // 当前页数
    num = 5, // 每页显示新闻树木
    i = 0, // 创建新闻元素时保持变量
    len = article.length; // 新闻数据长度

// 初始化页面
for (; i < len; i++) {
    dom = document.createElement('div');
    dom.innerHTML  = article[i]; // 默认展示第一页的内容
    if (i >= num) {
        dom.style.display = 'none'; // 超出第一页新闻英藏
    }
    document.getElementById('container').appendChild(dom);
}

// 下一页绑定数据
document.getElementsById('next_page').onclick = function () {
}

