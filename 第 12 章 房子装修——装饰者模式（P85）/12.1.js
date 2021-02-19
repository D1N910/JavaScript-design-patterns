var nameInput = document.getElementById('nameInput');

var nameWarnInput = document.getElementById('nameWarn');

nameInput.onclick = function () {
    nameWarnInput.style.display = 'inline-block'
};

// var nameInput = document.getElementById('nameInput');

// var nameWarnInput = document.getElementById('nameWarn');

// var nameTipsInput = document.getElementById('nameTips');

// nameInput.onclick = function () {
//     nameWarnInput.style.display = 'inline-block'
//     nameTipsInput.style.display = 'none'
// };

// 装饰者
var decorator = function (even, fn) {
    // 获取事件源
    var dom = document.getElementById(even);
    
    // 如果已有事件
    if (typeof dom.onclick === 'function') {
        var oldOnclick = dom.onclick;
        dom.onclick = function() {
            oldOnclick();
            fn()
        }
    } else {
        dom.onclick = fn
    }
}

decorator('nameInput', function() {
    var nameTipsInput = document.getElementById('nameTips');
    nameTipsInput.style.display = 'none';
})