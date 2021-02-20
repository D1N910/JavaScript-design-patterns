var span = document.getElementsByTagName('span');

span[0].onmouseover = function() {
    // this.style.color = 'red';
    // this.style.backgroundColor = '#ddd';

    // 桥接模式
    changeColor(this, 'red', '#ddd')
}

span[0].onmouseout = function() {
    this.style.color = 'initial';
    this.style.backgroundColor = 'initial';
}


span[1].onmouseover = function() {
    this.getElementsByTagName('strong')[0].style.color = 'red';
    this.getElementsByTagName('strong')[0].style.backgroundColor = '#ddd';
}

span[1].onmouseout = function() {
    this.getElementsByTagName('strong')[0].style.color = 'initial';
    this.getElementsByTagName('strong')[0].style.backgroundColor = 'initial';
}

span[2].onmouseover = function() {
    this.getElementsByTagName('strong')[0].style.color = 'red';
    this.getElementsByTagName('strong')[0].style.backgroundColor = '#ddd';
}

span[2].onmouseout = function() {
    this.getElementsByTagName('strong')[0].style.color = 'initial';
    this.getElementsByTagName('strong')[0].style.backgroundColor = 'initial';
}

function changeColor(dom, color, bgColor) {
    dom.style.color = color;
    dom.style.backgroundColor = bgColor;
}