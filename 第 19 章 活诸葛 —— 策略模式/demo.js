
var productList = [
    {
        name: '商品1',
        price: 100.11,
        discount: 'return40'
    },
    {
        name: '商品2',
        price: 45.11,
        discount: 'return30'
    },
    {
        name: '商品3',
        price: 90.11,
        discount: 'percent9'
    },
    {
        name: '商品4',
        price: 40.11,
        discount: 'percent8'
    }
]

var priceStrategy = function () {
    // 内部算法对象
    var strategy = {
        return40: function (price) {
            return +price -  parseInt(price / 100) * 40;
        },
        return30: function (price) {
            return +price -  parseInt(price / 100) * 30;
        },
        percent9: function (price) {
            return price * 100 * 90 / 10000;
        },
        percent8: function (price) {
            return price * 100 * 80 / 10000;
        }
    }

    return function (type, price) {
        return strategy[type] && strategy[type](price)
    }
}();

class ProductContainer {
    constructor(productList) {
        var container = document.createElement('ul');

        for (let i of productList) {
            var productLi = document.createElement('li');
            productLi.innerHTML = '产品名称：' + i.name + ' ' + '原价格: ' + i.price + ' 现在价格: ' + priceStrategy(i.discount, i.price);
            container.appendChild(productLi);
        }

        document.body.appendChild(container);
    }
}

new ProductContainer(productList);