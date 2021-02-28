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
