function inheritPrototype(subType, superType){
    var p = Object.create(superType.prototype);    // 复制一份父类的原型副本保存在变量中
    p.constructor = subType;                    // 修正因为重写子类原型导致子类的 constructor 属性被修改。如果你不知道这一行的作用，可以屏蔽之，然后跑一边，然后查看一下子类的 constructor
    subType.prototype = p;                        //设置子类的原型
}

var News = function () {
    // 子组件容器
     this.children = [];
     // 当前组件元素
     this.element = null;
}

News.prototype = {
    init: function () {
        throw new Error('请重写你的方法');
    },
    add: function () {
        throw new Error('请重写你的方法');
    },
    getElement: function () {
        throw new Error('请重写你的方法');
    }
}

// 容器类构造函数
var NewsContainer = function(id, parent) {
    // 构造函数继承父类
    News.call(this);
    // 模块的 id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构造器
    this.init();
}

// 寄生式继承父类原型方法
inheritPrototype(NewsContainer, News);

NewsContainer.prototype.init = function () {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
};

// 添加子元素的方法
NewsContainer.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

// 获取当前元素的方法
NewsContainer.prototype.getElement = function(child) {
    return this.element;
}

// 展示子元素
NewsContainer.prototype.show = function () {
    this.parent.appendChild(this.element);
}


// 行容器
var Item = function(className) {
    News.call(this);
    this.className = className || '';
    this.init();
}

inheritPrototype(Item, News)

Item.prototype.init = function() {
    this.element = document.createElement('li');
    this.element.className = this.className;
}

Item.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

Item.prototype.getElement = function() {
    return this.element;
}

// 新闻组合体容器
var NewsGroup = function (className) {
    News.call(this);
    this.className = className || 'gews-group';
    this.init();
}

inheritPrototype(NewsGroup, News)

NewsGroup.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.className = this.className;
}

NewsGroup.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

NewsGroup.prototype.getElement = function() {
    return this.element;
}


// 图片新闻类
var ImageNews = function (url, href, className) {
    News.call(this)
    this.url = url || ''
    this.href = href || '#';
    this.className = className || 'normal';
    this.init()
}

inheritPrototype(ImageNews, News)

ImageNews.prototype.init = function () {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news ' + this.className;
    this.element.href = this.href;
}

ImageNews.prototype.getElement = function () {
    return this.element
}


// icon新闻类
var IconNews = function (text, href, type) {
    News.call(this)
    this.href = href || ''
    this.text = text || '';
    this.type = type || 'dn';
    this.init()
}

inheritPrototype(IconNews, News)

IconNews.prototype.init = function () {
    this.element = document.createElement('a');

    var icon = document.createElement('i');
    icon.className = 'iconfont icon-' + this.type;

    var text = document.createTextNode(this.text);

    this.element.appendChild(icon);
    this.element.appendChild(text);

    this.element.href = this.href;
    this.element.className = 'icon-news';
}

IconNews.prototype.getElement = function () {
    return this.element
}


// 创建纯文字新闻类
var EasyNews = function (text, href) {
    News.call(this)
    this.href = href || '';
    this.text = text || '';
    this.init()
}

inheritPrototype(EasyNews, News)

EasyNews.prototype.init = function () {
    this.element = document.createElement('a');

    this.element.innerText = this.text

    this.element.href = this.href;
}

EasyNews.prototype.getElement = function () {
    return this.element
}

var TagsNews = function (text, href, type, pos) {
    News.call(this)
    this.href = href || '';
    this.text = text || '';
    this.type = type || '';
    this.pos = pos || 'left'
    this.init()
}

inheritPrototype(TagsNews, News)

TagsNews.prototype.init = function () {
    this.element = document.createElement('a');

    this.element.href = this.href;

    if (this.post === 'left') {
        this.element.innerHTML = '[' + this.type + ']' + this.text
    } else {
        this.element.innerHTML = this.text + '[' + this.type + ']'
    }
}
TagsNews.prototype.getElement = function () {
    return this.element
}


// 创建新闻模块
new NewsContainer('cc', document.body)
    .add(
        new Item('img-li')
            .add(new ImageNews('./local.jpg', '#', 'normal'))
    )
    .add(
        new Item('icon-li')
            .add(new IconNews('蛋糕博客上新啦', '#', 'dn'))
    )
    .add(
        new Item('text-li')
            .add(new EasyNews('转生变为蜘蛛上线啦', '#'))
    )
    .add(
        new Item('text-li')
            .add(new TagsNews('姚明喜获状元签！', '#', 'NBA', 'right'))
    ).add(
        new Item('text-li')
            .add(new TagsNews('易建联牛逼！', '#', 'NBA', 'left'))
    ).add(
        new Item('text-li')
            .add(
                new NewsGroup()
                    .add(new ImageNews('./local.jpg', '#', 'normal'))
                    .add(new EasyNews('转生变为蜘蛛上线啦', '#'))
                )
    ).show()