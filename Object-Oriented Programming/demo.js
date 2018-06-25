// 1.1入职第一天
function checkName(){
    console.log('1.1入职第一天 function checkName already running');
}
checkName();

// 1.2函数的另一种形式,变量
var checkNameAnother = function(){
    console.log('1.2函数的另一种形式 function checkNameAnother already running');
}
checkNameAnother();

// 1.3用对象收编变量
// 不容易被覆盖
// 被覆盖了也容易发现
var checkObject = {
    checkObjectCheckNameAnother : function(){
        console.log('1.3用对象收编变量 function checkObjectCheckNameAnother already running');
    }
}
checkObject.checkObjectCheckNameAnother();

// 1.4对象的另一种形式
var checkObjectAnother = function(){};
checkObjectAnother.checkObjectAnotherObjectCheckNameAnother=function(){
    console.log('1.4对象的另一种形式 function checkObjectAnotherObjectCheckNameAnother already running');
}
checkObjectAnother.checkObjectAnotherObjectCheckNameAnother();

// 1.5真假对象
// 简单地复制对象
var checkObjectAnotherCopy = function(){
    return {
        checkObjectAnotherObjctCheckNameAnother:function(){
            console.log('1.5真假对象 function checkObjectAnotherObjctCheckNameAnother already running');
        }
    }
}
var a = checkObjectAnotherCopy();
a.checkObjectAnotherObjctCheckNameAnother();