class Marly {
    constructor(params) {
        this.x = params.x || 50; // 当前横向位置
        this.y = params.y || 50; // 当前纵向位置
        this.r = params.r || 50; // 精灵半径
        this.speed = params.speed || 1; // 精灵速度

        this.arrowLeft = false; // 是否在往左走
        this.arrowRight = false; // 是否在往右走
        this.arrowUp = false; // 是否在往上走
        this.arrowDown = false; // 是否往下走

        // 初始化
        this.myCanvas = document.getElementById('myCanvas');
        this.myCtx = myCanvas.getContext('2d');

        requestAnimationFrame(this.draw.bind(this)); // 绘制内容
    }

    draw() {
        this.myCtx.clearRect(0, 0, 500, 500);

        this.myCtx.beginPath();

        if (this.arrowLeft) {
            this.x -= this.speed
        }
        if (this.arrowRight) {
            this.x += this.speed
        }
        if (this.arrowUp) {
            this.y -= this.speed
        }
        if (this.arrowDown) {
            this.y += this.speed
        }

        if (this.y - this.r <= 0) {
            this.y = this.r
        } else if (this.y + this.r >= 500) {
            this.y = 500 - this.r
        }

        if (this.x - this.r <= 0) {
            this.x = this.r
        } else if (this.x + this.r >= 500) {
            this.x = 500 - this.r
        }

        this.myCtx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        this.myCtx.stroke();

        requestAnimationFrame(this.draw.bind(this)); // 绘制内容
    }

    changeStatus(type) {
        var that = this
        var changeStatus = {
            ArrowRight: function() {
                that.arrowRight = !that.arrowRight
            },
            ArrowLeft: function() {
                that.arrowLeft = !that.arrowLeft
            },
            ArrowUp: function() {
                that.arrowUp = !that.arrowUp
            },
            ArrowDown: function() {
                that.arrowDown = !that.arrowDown
            }
        }

        changeStatus[type] && changeStatus[type]()
    }
}

var myMarly = new Marly({
    x: 50,
    y: 50,
    r: 50,
    speed: 20
});

document.onkeydown = function (e) {
    myMarly.changeStatus(e.key)
}

document.onkeyup = function (e) {
    myMarly.changeStatus(e.key)
}