// 模拟 article 数据
var article = [];
var articleIndex = 0;
// for (; articleIndex < 10000; articleIndex++) {
for (; articleIndex < 11; articleIndex++) {
    article.push('新闻标题' + articleIndex)
}

var flyWeight = function () {
    // 已创建的元素
    var created = [];
    // 创建一个新闻包装元素
    function create() {
        var div = document.createElement('div');
        document.getElementById('container').appendChild(div);
        created.push(div);
        return div;
    }

    return {
        getDiv() {
            if (created.length < 5) {
                return create();
            } else {
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}()

var paper = 0, // 当前页数
    num = 5, // 每页显示新闻数目
    i = 0, // 创建新闻元素时保持变量
    len = article.length; // 新闻数据长度

// 初始化页面
for (; i < num; i++) {
    flyWeight.getDiv().innerHTML = article[i] || ''
}

// 下一页绑定事件
document.getElementById('next_page').onclick = function() {
    // 获取所有新闻标题包装元素
    var j = k = n = 0; // j, k 循环变量，n 当前页显示的第一个新闻序号
    n = ++paper * num % len; // 获取当前页显示的第一个新闻序号

    console.log('n', n, 'paper', paper)

    for (; k < num; k++) {
        flyWeight.getDiv().innerHTML = article[n + k] || article[n + k - len] || ''
    }
}