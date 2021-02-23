// 1.1 入职第一天
function checkName() {
    console.log('1.1 入职第一天 function checkName already running');
}
checkName();

// 1.2 函数的另一种形式,变量
var checkNameAnother = function () {
    console.log('1.2 函数的另一种形式 function checkNameAnother already running');
}
checkNameAnother();

// 1.3 用对象收编变量
// 不容易被覆盖
// 被覆盖了也容易发现
var checkObject = {
    checkObjectCheckNameAnother: function () {
        console.log('1.3 用对象收编变量 function checkObjectCheckNameAnother already running');
    }
}
checkObject.checkObjectCheckNameAnother();

// 1.4 对象的另一种形式
var checkObjectAnother = function () { };
checkObjectAnother.checkObjectAnotherObjectCheckNameAnother = function () {
    console.log('1.4 对象的另一种形式 function checkObjectAnotherObjectCheckNameAnother already running');
}
checkObjectAnother.checkObjectAnotherObjectCheckNameAnother();

// 1.5 真假对象
// 简单地复制对象
var checkObjectAnotherCopy = function () {
    return {
        checkObjectAnotherObjctCheckNameAnother: function () {
            console.log('1.5 真假对象 function checkObjectAnotherObjctCheckNameAnother already running');
        }
    }
}
// 返回新对象
// 使用时候不会相互影响
var a = checkObjectAnotherCopy();
a.checkObjectAnotherObjctCheckNameAnother();

// 1.6 类也可以
// 用真正意义上类的创建方式
var checkObjectClass = function () {
    this.checkNameAnother = function () {
        console.log('1.6 类也可以 function checkNameAnother already running');
    }
}
var b = new checkObjectClass();
b.checkNameAnother();

// 1.7 一个检测类
// 1.6创建的对象都会对类的this上的属性进行复制，
// 新创建的对象都会有自己的一套方法，造成的浪费很奢侈，需要处理以下
var checkObjectp = function () { };
//  方法一
// checkObjectp.prototype.checkName=function(){
//     console.log('1.7一个检测类 function checkNameAnother already running');
// }
// 方法二
checkObjectp.prototype = {
    checkName1: function () {
        console.log('1.7 一个检测类 function checkName1 already running');
    },
    checkName2: function () {
        console.log('1.7 一个检测类 function checkName2 already running');
    },
    checkName3: function () {
        console.log('1.7 一个检测类 function checkName3 already running');
    }
}
// 不能混用哦
var c = new checkObjectp();
c.checkName1();
c.checkName2();
c.checkName3();

// 1.8 方法还可以这样用
// 之前1.7调用方法要重复调用，需要连续写来调用
// 改一下
var checkObjectCdy = {
    checkName1 : function () {
        console.log('1.8 方法还可以这样用 function checkName1 already running');
        return this;//代表对象本身
    },
    checkName2 : function () {
        console.log('1.8 方法还可以这样用  function checkName2 already running');
        return this;        
    },
    checkName3 : function () {
        console.log('1.8 方法还可以这样用  function checkName3 already running');
        return this;        
    }
}
checkObjectCdy.checkName1().checkName2().checkName3();

var checkObjectCdyP=function(){}
checkObjectCdyP.prototype={
    checkName1 : function () {
        console.log('1.8 方法还可以这样用 原型 function checkName1 already running');
        return this;//代表对象本身
    },
    checkName2 : function () {
        console.log('1.8 方法还可以这样用 原型 function checkName2 already running');
        return this;        
    },
    checkName3 : function () {
        console.log('1.8 方法还可以这样用 原型 function checkName3 already running');
        return this;        
    }
}
//使用的时候也要声明
var d = new checkObjectCdyP();
d.checkName1().checkName2().checkName3();

// 1.9 函数的祖先

//不推荐用，因为会污染Function
// Function.prototype.checkName=function(){
//     console.log('1.9 函数的祖先 function checkName already running');

// }
// var f = function(){};
// f.checkName();

// 抽象出一个统一添加方法的功能方法
// Function.prototype.addMethod=function(name,fn){
//     this[name]=fn;
// }
// var method = function(){};

// method.addMethod('checkName',function(){
//     console.log('1.9 函数的祖先 抽象出一个统一添加方法的功能方法 function checkName already running');
// })
// method.checkName();

// 1.10 链式添加

//抽象出一个统一添加方法的功能方法
Function.prototype.addMethod=function(name,fn){
    this.prototype[name]=fn;
    return this;
}
var method = function(){};

method.addMethod('checkName',function(){
    console.log('1.111 链式添加 function checkName already running');
    return this;
});
// method.checkName().checkName2();

//1.11 换一种方式使用方法
var m = new method();
m.checkName();

// 课后问题
// 真假对象一节中如何实现方法的链式调用呢？
console.log('真假对象一节中如何实现方法的链式调用呢？')
var trueFalseObject = function () {
  return {
    checkName : function () {
      console.log('checkName')
      return this
    },
    checkAge : function () {
      console.log('checkAge')
      return this
    }
  }
}
var trueFalseObjectItem = trueFalseObject ()
trueFalseObjectItem.checkName().checkAge()

// 试着定义一个可以为函数添加多个方法的addMethod方法
console.log('试着定义一个可以为函数添加多个方法的addMethod方法')
Function.prototype.addMethod = function (funList) {
  for(let i in funList){
    this[i] = funList[i]
  }
  return this
}
var methods = function () {}
methods.addMethod({
  checkName: function () {
    console.log('checkName')
    return this
  },
  checkAge: function () {
    console.log('checkAge')
    return this
  }
})

methods.checkName().checkAge()

// 试着定义一个即可为函数原型添加方法犹可为其自身添加方法的addMethod方法
console.log('试着定义一个即可为函数原型添加方法又可为其自身添加方法的addMethod方法')

Function.prototype.addMethod = function(name, fn){
  Function.prototype[name]=fn
  this[name] = fn
  return this
}
var methods = function () {}
methods.addMethod('checkAge',()=>{
  console.log('checkAge')
})
methods.checkAge()

var methods2 = function () {}

methods2.checkAge()