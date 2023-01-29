



class Snake {
    constructor(width, height, x, y, color,) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color



        var _this = this;
        document.onkeydown = function (event) {

            console.log(event.key);
            _this.move(event.key);

        };

        this.setsvg();
        this.setmsg();
    }

    setsvg() {

        this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.monOjectDom.style.width = `${this.width}px`;
        this.monOjectDom.style.height = `${this.height}px`;
        this.monOjectDom.style.stroke = this.color;
        this.monOjectDom.style.fill = 'white';
        this.monOjectDom.setAttribute('x', this.x);
        this.monOjectDom.setAttribute('y', this.y);
        this.monOjectDom.style.position = 'absolute';
    }
    getsvg() {
        return this.monOjectDom;
    }

    move(key) {
        let space = document.querySelector('#surface');
        console.log(space.clientWidth);
        console.log(this.monOjectDom);
        if (key === 'ArrowRight') {
            if (this.x < 139) {
                this.x += 1
                this.monOjectDom.setAttribute('x', this.x);
                if (this.x == 139) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowLeft') {
            if (this.x > 1) {
                this.x -= 1
                this.monOjectDom.setAttribute('x', this.x);
                if (this.x == 1) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowUp') {
            if (this.y > 1) {
                this.y -= 1
                this.monOjectDom.setAttribute('y', this.y);
                if (this.y == 1) {
                    this.msg.style.display = 'block';
                }
            }
        } else if (key === 'ArrowDown') {
            if (this.y < 139) {
                this.y += 1
                this.monOjectDom.setAttribute('y', this.y);
                if (this.y == 139) {
                    this.msg.style.display = 'block';
                    this.monOjectDom.setAttribute('y', this.y);
                }
            }

        } else if (key === " ") {
            clearInterval()
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
const snake = new Snake(1, 1, 5, 5, 'red');

surface.append(snake.getsvg(), snake.getmsg());
document.body.appendChild(snake.getmsg());


let resetbtn = document.querySelector('#resetBtn');
let go
document.querySelector('#startBtn').addEventListener("click",()=>{
    
   go  = setInterval(function () {
  
          snake.move(dir);
  
      }, 1000/150);  
})




function reset() {
    snake.getmsg().style.display="none";
    clearInterval(go)
}

resetbtn.addEventListener('click',reset)