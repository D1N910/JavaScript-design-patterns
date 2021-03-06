// 2.1 两种编程风格——面向过程与面向对象

// 面向对象编程就是将你的需求抽象成了一个对象，然后针对这个对象分析其特性（属性）与动作（方法）。这个对象我们称之为类。
// 面向对象编程思想中其中又一个特点就是封装，就是说把你需要的功能放在一个对象里。比如你大学毕业你来公司携带的行李物品没有
// 一件一件拿过来，而是要将他们放在一个旅行箱里，这样不论携带还是管理都会更方便一些。遗憾的是对于JavaScript这种解释性
// 的弱类型语言没有经典强类型语言中哪种通过class等关键字实现的类的封装方式，JavaScript中都是一些特性模仿实现的，但这也
// 带来了极高的灵活性，让我们编写的代码更自由

// 2.2 包装明星——封装
// 2.2.1 创建一个类

// 创建一个类的方法，函数保存在一个变量里，代表类的变量名首字母大写。然后在这个函数（类）的内部通过对this
// 变量添加属性或者方法来实现对类添加属性或者方法
var Book = function (id, bookname, price) {
  this.id = id;
  this.bookname = bookname;
  this.price = price;
}

// 也可以通过在类的原型上添加属性和方法，有两种方法，一种是一一为原型对象属性赋值，另一种则是将一个对象赋值给类的原型对象。

Book.prototype.dispaly = function() {
  // 展示这本书
};

// 或者

// Book.prototype = {
//   dispaly : function () {}
// };


var book = new Book(10, 'JavaScript 设计模式', 50);
console.log(book.bookname)

// constructor 是一个属性，当创建一个函数或者对象时都会为其创建一个原型对象prototype，在prototype对象中又会像
// 函数中创建this一样创建一个constructor属性，那么constructor属性只想的就是拥有整个原型对象的函数或对象，例如在本
// 例中 Book prototype 中的 constructor属性之乡的就是book类对象

// 2.2.2 这些都是我的——属性与方法封装
// 在JavaScript的函数级作用域，声明在函数内部的变量以及方法在外界是访问不到的。通过此特性即可创建类的私有变量以及私有方法。
// 在函数内部通过 this 创建的属性和方法，在类创建对象时，每个对象自身都拥有一份并且可以在外部访问到。
// 因此通过this创建的属性可看作是对象共有属性和对象共有方法，而通过this创建的方法，不但可以访问这些对象的共有属性与共有方法
// 而且还能访问类（创建时）或对象自身的私有属性和私有方法，由于这些方法权利比较大，所以又看作特权方法。
// 私有属性与私有方法，特权方法，对象共有属性和对象共有方法，构造器
var Book = function(id, name, price){
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId () {

  };
  // 特权方法
  this.getName = function () {
    console.log(name)
  };
  this.addPrice = function () {
    price ++
  }
  this.getPrice = function () {
    console.log(price)
  };
  // 对象公有属性
  this.id = id;
  // 对象公有方法
  this.copy = function () {};
  // 构造器
}
var b = new Book(11,'JavaScript',15)
b.getName() 
b.getPrice()
b.addPrice()
b.getPrice()



// 2.2.3 你们看不到我——闭包实现
// 有时我们经常将类的静态变量通过闭包来实现。
var Book = (function() {
  // 静态私有变量  
  var bookNum = 99;
  // 静态私有方法
  function checkBook(name) {
  }
  // 返回构造函数
  return function(newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkID(id){}
    // 特权方法
    this.getName = function() {};
    this.getPrice = function() {};
    this.setName = function() {};
    this.setPrice = function() {};
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function() {};
    bookNum++
    if (bookNum > 100)
      throw new Error('我们仅出版100本书。');
      //构造器
      this.setName(name);
      this.setPrice(price);
  }
})();

Book.prototype = {
  // 静态共有属性
  isJSBook: false,
  // 静态公有方法
  dispaly: function(){}
};

var b1 = new Book(1);

// 闭包是有权访问另一个函数作用域中变量的函数，即在一个函数内部创建另一个函数。我们将这个闭包作为创建对象的构造函数，
// 这样它既是闭包优势可实力对象的函数，即可访问到类函数作用域中的变量，如bookNum这个变量，此时这个变量叫静态私有变量。
// 并且checkBook()可称之为静态私有方法。当然闭包内部也有其自身的私有变量以及私有方法如price、checkID().但是
// 在闭包外部添加原型属性和方法看上去像是脱离了闭包这个类，所以有时候在闭包内部实现一个完整的类然后将其返回

for (var i = 0;i<=10;i++) {
  (function(num) {
    return setTimeout(function(){
      console.log(num)
    },10)
  })(i)
}

// 有时候在闭包内部实现一个完整的类然后将其返回
var Book = (function() {
  // 静态私有变量  
  var bookNum = 99;
  // 静态私有方法
  function checkBook(name) {
  }
  
  // 创建类
  function _book(newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkID(id){}
    // 特权方法
    this.getName = function() {};
    this.getPrice = function() {};
    this.setName = function() {};
    this.setPrice = function() {};
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function() {};
    bookNum++
    if (bookNum > 100)
      throw new Error('我们仅出版100本书。');
      //构造器
      this.setName(name);
      this.setPrice(price);
  }
  // 构建原型
  _book.prototype = {
    // 静态共有属性
    isJSBook: false,
    // 静态公有方法
    dispaly: function(){}
  };
  
  return _book;
})();


// 检察官模式

var Ball = function(type) {
  if(this instanceof Ball){
    this.type = type
  } else {
    return new Ball(type)
  }
}

// Ball.prototype.getType = function() {
//   console.log(this.type)
// }

// var football = Ball('football')

// football.getType()


// function SuperClass() {
//   this.superValue = true
// }

// SuperClass.prototype.getType = function() {
//   console.log(this.superValue)
// }

// function SubClass() {
//   this.subValue = false
// }

// SubClass.prototype = new SuperClass()

// var newSub = new SubClass()
// newSub.getType()


// 面试题
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }

// console.log(new Date, i);
// 运行结果
// 2017-03-18T00:43:45.873Z 5
// 2017-03-18T00:43:46.866Z 5
// 2017-03-18T00:43:46.868Z 5
// 2017-03-18T00:43:46.868Z 5
// 2017-03-18T00:43:46.868Z 5
// 2017-03-18T00:43:46.868Z 5

// 追问1：闭包
// 如果期望代码的输出变成：5 -> 0,1,2,3,4，该怎么改造代码？
// for(var i = 0;i<5;i++){
//   (function(num){setTimeout(function(){
//     console.log(new Date, num)
//   })})(i)
// }
// console.log('//d')

// for(let i = 0;i<5;i++){
//   setTimeout(function(){
//     console.log(new Date, i)
//   })
// }

// for (var i = 0; i < 5; i++) {
//    (function(num){
//     setTimeout(function() {
//       console.log(new Date, num);
//     }, 1000*num);
//    })(i)
// }

// setTimeout(()=>{
//   console.log(new Date, i);
// },1000*i)

// const tasks = []

// for (var i = 0; i < 5; i++) {
//   ((j)=>{
//     tasks.push(new Promise((resolve)=>{
//       setTimeout(()=>{
//         console.log(new Date, j)
//         resolve()
//       },1000*j)
//     }))
//   })(i)
// }

// Promise.all(tasks).then(()=>{
//   setTimeout(()=>{
//     console.log(new Date,i)
//   },1000);
// })

// const testConst = []

// for(var x = 0; x < 5; x++){
//   (function(num){
//     testConst.push(new Promise((resolve)=>{
//       setTimeout(()=>{
//         console.log(new Date, num)
//         resolve()
//       },1000*num)
//     }))
//   })(x)
// }

// Promise.all(testConst).then(()=>{
//   setTimeout(()=>{
//     console.log(new Date, x)
//   }, 1000)
// })

// const sleep = (timeountMS) => { return new Promise((resolve) => {
//   setTimeout(resolve,timeountMS);
// }) }

// (async () => {
//   for (var i = 0;i < 5;i++){
//     await sleep(1000)
//     console.log(new Date, i)
//   }
//   await sleep(1000)
//   console.log(new Date, i)
// })()

// (async () => {  // 声明即执行的 async 函数表达式
//   for (var i = 0; i < 5; i++) {
//       await sleep(1000);
//       console.log(new Date, i);
//   }

//   await sleep(1000);
//   console.log(new Date, i);
// })();


/*********** 传宗接代－－继承 ***********/

// 类式继承
// 声明父类
// function SuperClass () {
//   this.superValue = true;
// };

// 为父类添加共有方法
// SuperClass.prototype.getSuperValue = function () {
//   return this.superValue;
// };

// 声明子类
// function SubClass () {
//   this.subValue = false;
// }

// 继承父类
// SubClass.prototype = new SuperClass ()
// // 为子类添加共有方法
// SubClass.prototype.getSubVale = function () {
//   return this.subValue
// }

// 新建对象
// var subItem = new SubClass()

// console.log(subItem.getSuperValue())
// console.log(subItem.getSubVale())

// console.log(subItem instanceof SubClass) // true
// console.log(subItem instanceof SuperClass) // true
// console.log(SubClass instanceof SuperClass) // false

// console.log(SubClass.prototype instanceof SuperClass) // true

// console.log(subItem instanceof Object) // true

/*********** 传宗接代－－继承  ***********/
// 两个缺点，因为子类通过其原型 prototype 对父类实例化，继承了父类。所以说父类的中的共有属性
// 是要引用类型，就会再子类中被所有实例共用。因此一个子类的实例更改子类原型从父类构造函数中继承
// 来的共有属性酒会直接影响到其它子类：

// function SuperClass () {
//   this.books = ['JavaScript', 'html', 'css'];
// }
// function SubClass () {}
// SubClass.prototype = new SuperClass();
// var instance1 = new SubClass();
// var instance2 = new SubClass();
// console.log(instance2.books); // ["JavaScript", "html", "css"]
// instance1.books.push('测试')
// console.log(instance2.books)

// instance1的一个无意的修改就会