var paper = 0, // 当前页数
    num = 5, // 每页显示新闻数目
    i = 0; // 创建新闻元素时保持变量

// 请求新闻
var requestNews = (function () {
    var newsCache = {};
    return {
        getNews(page, fn) {
            if (newsCache[page]) {
                fn(newsCache[page]);
            } else {
                setTimeout(function () {
                    newsCache[page] = (function () {
                        var i = 0
                        var data = []
                        while(i < num) {
                            data.push('新闻' + page + '_' + i);
                            i++;
                        }
                        return data
                    })();
                    fn(newsCache[page]);
                }, 1000)
            }
        }
    }
})()

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
            if (created.length < num) {
                return create();
            } else {
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}()

requestNews.getNews(++paper, function (params) {
    for (var k = 0; k < num; k++) {
        flyWeight.getDiv().innerHTML = params[k];
    }
})



// 上一页面绑定事件
document.getElementById('pre_page').onclick = function() {
    requestNews.getNews(--paper, function (params) {
        for (var k = 0; k < num; k++) {
            flyWeight.getDiv().innerHTML = params[k];
        }  
    })
}

// 下一页绑定事件
document.getElementById('next_page').onclick = function() {
    requestNews.getNews(++paper, function (params) {
        for (var k = 0; k < num; k++) {
            flyWeight.getDiv().innerHTML = params[k];
        }  
    })
}