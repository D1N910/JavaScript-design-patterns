// 验证信息模块
function  verificationInformationModule(params) {
    var type = params.type // 类型
    var value = params.value // 内容

    var verificationMethod = {
        email: function (value) {
            return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
        },
        englishName: function (value) {
            return /^[a-zA-Z0-9_-]+)+$/.test(value)
        }
    }

    if (verificationMethod[type] && !verificationMethod[type](value)) {
        pushErrorModule(type + ' error' + new Date().getTime())
    }
}

// 相应报错模块
function pushErrorModule(value) {
    promptBox(value, 'error')
}

// 提示框
function promptBox(value, type) {
    var tipsLi = document.createElement('li');
    document.getElementById('tips').appendChild(tipsLi);

    tipsLi.innerHTML = value

    tipsLi.className = type

    setTimeout(function () {
        tipsLi.style.display = 'none'
    }, 2000);
}

document.getElementById('submit').onclick = function (e) {
    var input = document.getElementById('input-container')
    verificationInformationModule({
        type: 'email',
        value: input.value
    })
}