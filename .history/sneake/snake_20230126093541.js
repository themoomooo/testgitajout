
var dir
window.addEventListener("keydown", (event) => {
    dir = event.key
}, true);



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
        this.monOjectDom.style.width = '2px';
        this.monOjectDom.style.height = '2px';
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
        this.food = new Food(this)
        this.space = document.querySelector('#surface');
        this.space.appendChild(this.food.getfood());
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
       
        this.food.getfood()

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
        if (this.x==this.food.getfood().x.animVal.value && this.y==this.food.getfood().y.animVal.value) {
          
          console.log(this.food.getfood())
          this.space.appendChild(this.food.getfood());
         
          /* this.food.getfood().outerHTML="" */
          
        }
        
        
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




const snake = new Snake(2, 2, 5, 5, 'green');

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