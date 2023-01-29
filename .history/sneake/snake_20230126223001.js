
var dir
window.addEventListener("keydown", (event) => {
    dir = event.key
}, true);


class Tail {


    constructor() {
        this.tailParts = [];
    }

    add(tailPart) {
        this.tailParts.push(tailPart);
    }


    move(x, y, headX, headY, tailPartNumber = 0) {

        if (this.tailParts.length > 0 && tailPartNumber in this.tailParts) {


            let oldX = this.tailParts[tailPartNumber].x;
            let oldY = this.tailParts[tailPartNumber].y;


            this.tailParts[tailPartNumber].move(x, y);

            return this.move(oldX, oldY, headX, headY, tailPartNumber + 1)
        }

        return true;
    }
}


class TailPart {
    constructor(x, y) {
        this.domObject = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.color = 'blue';
        this.x = x;
        this.y = y;
    }

    initSvg() {
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('fill', this.color);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.initSvg();
    }

    getDomObject() {
        return this.domObject;
    }
}

class Food {

    constructor(surface) {
        this.game = surface;
        this.placeFood();
        this.createFood()
    }


    placeFood() {
        this.x = Math.floor(Math.random() * 37);
        this.y = Math.floor(Math.random() * 37);

    }
    createFood() {
        this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.monOjectDom.style.width = '1px';
        this.monOjectDom.style.height = '1px';
        this.monOjectDom.setAttribute('x', this.x);
        this.monOjectDom.setAttribute('y', this.y);
        this.monOjectDom.style.position = 'absolute';
    }
    getfood() {
        return this.monOjectDom;
    }
}


class Snake {
    constructor(width, height, x, y, color,) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color

        this.space = document.querySelector('#surface');
        this.food = new Food()
        this.space.append(this.food.getfood());



        var _this = this;
        document.onkeydown = function (event) {
            _this.move(event.key);
        };

        this.setsvg();
        this.setmsg();
    }

    setsvg() {
        this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.monOjectDom.style.width = `${this.width}px`;
        this.monOjectDom.style.height = `${this.height}px`;
        this.monOjectDom.style.fill = this.color;
        this.monOjectDom.setAttribute('x', this.x);
        this.monOjectDom.setAttribute('y', this.y);
        this.monOjectDom.style.position = 'absolute';
    }
    getsvg() {
        return this.monOjectDom;
    }

    move(key) {
        this.tail = new Tail();
        let oldX = this.x;
        let oldY = this.y;
        if (key === 'ArrowRight') {
            if (this.x < 38) {
                this.x += 1
                this.monOjectDom.setAttribute('x', this.x);
                if (this.x == 39) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowLeft') {
            if (this.x > 0) {
                this.x -= 1
                this.monOjectDom.setAttribute('x', this.x);
                if (this.x == 0) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowUp') {
            if (this.y > 0) {
                this.y -= 1
                this.monOjectDom.setAttribute('y', this.y);
                if (this.y == 0) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowDown') {
            if (this.y < 38) {
                this.y += 1
                this.monOjectDom.setAttribute('y', this.y);
                if (this.y == 39) {
                    this.msg.style.display = 'block';
                    this.monOjectDom.setAttribute('y', this.y);
                }
            }
        }


        if (this.x == this.food.getfood().x.animVal.value && this.y == this.food.getfood().y.animVal.value) {
            let tailPart = new TailPart(this.food.x, this.food.y, 'black')
            thi
            this.tail.add(tailPart);
            this.space.appendChild(tailPart.getDomObject());


            this.space.appendChild(this.food.getfood()).remove();
            this.food = new Food();
            this.space.appendChild(this.food.getfood());

        }
        return this.tail.move(oldX, oldY, this.x, this.y);
    }
    setmsg() {
        this.msg = document.createElement('div');
        this.msg.style.width = '100px';
        this.msg.style.height = '50px';
        this.msg.textContent = 'Game Over';
        this.msg.style.display = 'none';
        this.msg.style.border = '1px solid black';
        this.msg.style.position = 'absolute';
        this.msg.style.top = '180px';
        this.msg.style.left = '170px';
    }
    getmsg() {
        return this.msg;
    }
}






const snake = new Snake(1, 1, 5, 5, 'green');

surface.append(snake.getsvg(), snake.getmsg());
document.body.appendChild(snake.getmsg());





let resetbtn = document.querySelector('#resetBtn');
let go
document.querySelector('#startBtn').addEventListener("click", () => {

    go = setInterval(function () {

        snake.move(dir);
    }, 100);
})
function reset() {
    snake.getmsg().style.display = "none";
    clearInterval(go)
}

resetbtn.addEventListener('click', reset)