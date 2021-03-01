// 根据需求的模块实现
var viewCommand = (function () {
    // 模块
    var tpl = {
        // 展示标题结构模版
        title: [
            '<div class="title">',
                '<div class="main">',
                    '<h2>{ #title# }</h2>',
                    '<p>{ #tips# }</p>',
                '</div>',
            '</div>'
        ].join(''),
        // 展示图片
        product: [
            '<div class="product">',
                '<img src="{ #src# }" alt="">',
                '<p>{ #text# }</p>',
            '</div>'
        ].join('')
    },
    // 缓存格式化内容
    html = '';

    // 格式化字符串
    function  formateString(str, obj) {
        // 替换'{ #' 与'# }' 之间的字符串
        return str.replace(/\{ #(\w+)# \}/g, function (match, key) {
            return obj[key] + '';
        })
    }

    // 方法集合
    var Action = {
        // 创建方法
        create: function (data, type) {
            console.log('data 37', data)
            // 遍历数组
            if (data.length) {
                console.log('data 40', data)
                for (var i = 0; i < data.length; i ++) {
                    console.log('datai', data[i])
                    html += formateString(tpl[type], data[i]);
                }
            } else {
                // 字符串直接格式化
                html += formateString(tpl[type], data);
            }
            console.log('html', html)
        },
        // 展示视图
        display: function (container, data, view) {
            // 如果传入数据
            console.log('data 51', data)
            if (data) {
                this.create(data, view);
            }
            // 展示模块
            container.innerHTML = html;
            html = '';
        }

    }
    // 命令接口
    return function excute(msg) {
        // 解析命令，如果 msg 的 params 不是数组，要转转换成数组
        msg.params = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
        Action[msg.command].apply(Action, msg.param)
    }
})()


var titleData = {
    title: '测试 title',
    tips: '测试 tips'
}

var productData = [
    {
        src: './images/book.png',
        text: '书籍'
    },
    {
        src: './images/home.png',
        text: '家庭'
    }
]

viewCommand({
    command: 'create',
    param: [titleData, 'title']
})

viewCommand({
    command: 'display',
    param: [document.getElementById('container'), productData, 'product']
})