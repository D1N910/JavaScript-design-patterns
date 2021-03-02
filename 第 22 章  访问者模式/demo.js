var data = window;
var data1 = function (params) {};
var data2 = 1;
var data3 = '1';

console.log(Object.prototype.toString.call(data));
console.log(Object.prototype.toString.call(data1));
console.log(Object.prototype.toString.call(data2));
console.log(Object.prototype.toString.call(data3));


// 对象访问器
var Visitor = (function () {
    return {
        // 截取方法
        splice: function () {
            // splice 方法参数
        }
    }
})()