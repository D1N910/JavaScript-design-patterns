// 这里就进入了创建型设计模式
// 创建型设计模式是一类处理对象创建的设计模式，通过某种方式控制对象的创建来避免基本对象创建
// 时可能导致设计上的问题或增加设计上的复杂度
// 第3章 神奇的魔术师——简单工厂模式

 var LoginAlert = function (text) {
    this.content = text
}
    
LoginAlert.prototype.show = function(){
    // 显示提示框
    alert(this.content)
}

document.getElementById('userName').onblur = function(e) {
    console.log()
    if (e.target.value === '') {
        var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字')
        userNameAlert.show()
    }
}




var Factory = function(type, content) {

    if (this instanceof Factory) {
    
        var s = new this[type](content);
    
        return s
    
    } else {
    
        return new Factory(type, content)
    
    }
    
}
 

Factory.prototype = {

    guanggao1: function (content) {
    
    // ……
    
    },
    
    guanggao2: function (content) {
    
    // ……
    
    }
    
    }

Factory('guanggao1', '挖掘机找蓝翔')
