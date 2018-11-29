// 这里就进入了创建型设计模式
// 创建型设计模式是一类处理对象创建的设计模式，通过某种方式控制对象的创建来避免基本对象创建
// 时可能导致设计上的问题或增加设计上的复杂度
// 第3章 神奇的魔术师——简单工厂模式


var demo = new Object()
console.log(demo)

var myObject = function () {
    this.c = 1;
    this.getC = function () {
        console.log(this.c)
    }
    return this
}

var demo2 = new myObject()

console.log(demo2)
