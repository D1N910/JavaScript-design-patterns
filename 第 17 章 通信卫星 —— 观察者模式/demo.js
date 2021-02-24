// 观察者模式（发布订阅模式、消息机制）雏形
var Observer = (function() {
    // 防止消息队列暴露而被篡改将消息容器作为静态私有变量保存
    var _messages = {}
    return {
        // 订阅
        resiger(type, fn) {
            if (_messages[type]) {
                _messages[type].push(fn)
            } else {
                _messages[type]= [fn]
            }
            return this;
        },
        // 发布消息
        fire(type, args) {
            if (!_messages[type]) {
                return;
            }

            // 定义消息信息
            var events = {
                type: type,
                args: args || {}
            }

            for (let i of _messages[type]) {
                i.call(this, events);
            }
        },
        // 移除订阅
        remove(type, fn) {
            if (!_messages[type] instanceof Array) {
                return;
            }

            // 从最后一个消息动作遍历删除
            var i = _messages[type].length - 1

            for (; i >= 0; i--) {
                _messages[type][i] === fn && _messages[type].splice(i, 1);
            }
        }
    }
})()

var message = {
    // 消息列表
    messageList: [
        '初始消息1',
        '初始消息2',
        '初始消息3'
    ]
};

// 生成消息数提示框
 (function() {
    var messageBox = document.createElement('div');
    var messageBoxTitle = document.createElement('span');
    var messageBoxNum = document.createElement('span');

    messageBoxTitle.innerHTML = '最新消息数：';

    messageBox.appendChild(messageBoxTitle);
    messageBox.appendChild(messageBoxNum);

    document.body.appendChild(messageBox)

    function numberOfUpdateMessages() {
        messageBoxNum.innerHTML = message.messageList.length
    }

    numberOfUpdateMessages();
    
    Observer.resiger('messageUpdate', numberOfUpdateMessages);
})();

// 生成消息列表
(function() {
    var messageList = document.createElement('ul');

    document.body.appendChild(messageList);

    let nowIndex = 0;

    function updateMessageList() {
        for (; nowIndex < message.messageList.length; nowIndex ++) {
            var newLi = document.createElement('li')
            newLi.innerHTML = message.messageList[nowIndex]
            messageList.appendChild(newLi);
        }
    }

    updateMessageList();

    Observer.resiger('messageUpdate', updateMessageList);
})();


// 生成消息发送框
(function() {
    var messageInput = document.createElement('input');
    var messageBtn = document.createElement('button');

    messageBtn.innerHTML = '发送'

    document.body.appendChild(messageInput);
    document.body.appendChild(messageBtn);


    messageBtn.onclick = function(e) {
        var mIv = messageInput.value;

        message.messageList.push(mIv);
        
        messageInput.value = '';

        Observer.fire('messageUpdate');
    }
})();
