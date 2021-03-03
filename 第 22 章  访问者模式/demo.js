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
            // splice 方法参数，从原参数的第二个参数开始算起
            var args = arguments

        }
    }
})()



// 对象访问器
var Visitor = (function () {
    return {
        // 截取方法
        splice: function () {
            // 获得除了对象以外的参数
            var args = Array.prototype.splice.call(arguments, 1);

            return Array.prototype.splice.apply(arguments[0], args);
        },
        // 新增数据
        push: function () {
            // 强化对象，让其拥有 len 属性
            var len = arguments[0].length || 0;
            // 添加的数据从原参数的第二个算起
            var args = this.splice(arguments, 1);
            // 校正 length 属性
            arguments[0].length = len + arguments.length - 1;
            return Array.prototype.push.apply(arguments[0], args)            
        },
        // 弹出最新加的一个
        pop: function () {
            return Array.prototype.pop.apply(arguments[0])
        }
    }
})()

console.log('Visitor')
var c = {}
Visitor.push(c, 1, 2, 3, 4)
console.log(c)

Visitor.splice(c, 0,2)
console.log(c)

console.log(Visitor.pop(c))

console.log(c)
