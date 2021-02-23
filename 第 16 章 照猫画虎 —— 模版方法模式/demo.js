class Alert {
    constructor(data) {
        if (!data) {
            return;
        }
        // 设置内容
        this.content = data.content;

        // 创建提示框面板
        this.panel = document.createElement('div');

        // 创建提示内容组件
        this.contentNode = document.createElement('p');
        // 创建确定按钮组件
        this.confirmBtn = document.createElement('div');
        // 创建关闭按钮组件
        this.closeBtn = document.createElement('b');

        // 为提示框面板添加类
        this.panel.className = 'alert';
        // 为确定按钮组件添加类
        this.confirmBtn.className = 'a-confirm';
        // 为取消按钮组件添加类
        this.closeBtn.className = 'a-close';
        this.closeBtn.innerHTML = 'X';

        // 为确定按钮添加文案
        this.confirmBtn.innerHTML = data.confirm || '确定';
        // 为提示内容添加文本
        this.contentNode.innerHTML = this.content;
        // 点击确定按钮执行方法，如果 data 中有 success 方法则为 success 方法，否则为空函数
        this.success = data.success || function () {}
        // 点击关闭按钮执行方法
        this.fail = data.fail || function () {}
    }

    init() {
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        // 插入页面中
        document.body.appendChild(this.panel);
        // 绑定事件
        this.bindEvent();
        // 显示提示框
        this.show();
    }

    bindEvent() {
        var me = this;
        this.closeBtn.onclick = function () {
            // 执行关闭方法
            me.fail();
            // 隐藏弹层
            me.hide();
        }
        this.confirmBtn.onclick = function () {
            // 执行确定方法
            me.success();
            // 隐藏弹层
            me.hide();
        }
    }

    // 隐藏弹框的方法
    hide() {
        this.panel.style.display = 'none';
    }

    // 展示弹框的方法
    show() {
        this.panel.style.display = 'block';;
    }
}

document.getElementById('showNormalBtn').addEventListener('click', function() {
    console.log('ddd')
    new Alert({
        content: '普通内容'
    }).init()
})