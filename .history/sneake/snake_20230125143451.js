
var dir
window.addEventListener("keydown", (event) => {
    dir = event.key
}, true);


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
            if (this.x < 39) {
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
            if (this.y < 39) {
                this.y += 1
                this.monOjectDom.setAttribute('y', this.y);
                if (this.y == 39) {
                    this.msg.style.display = 'block';
                    this.monOjectDom.setAttribute('y', this.y);
                }
            }

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


class Food {

	constructor(game) {

		this.game = game;
		this.placeFood();

	}

	//Places a food in a random tile in the grid.
	placeFood() {

		this.x = Math.floor(Math.random() * this.game.width);
		this.y = Math.floor(Math.random() * this.game.height);

	}

	//Render the food in the grid.
	update() {

		this.game.grid.fillTile(this.x, this.y, "#111410");

	}

}



const snake = new Snake(1, 1, 5, 5, 'red');

surface.append(snake.getsvg(), snake.getmsg());
document.body.appendChild(snake.getmsg());
console.log(snake.getsvg().style);





let resetbtn = document.querySelector('#resetBtn');
let go
document.querySelector('#startBtn').addEventListener("click",()=>{
    
   go  = setInterval(function () {
  
          snake.move(dir);
  
      }, 1000/30);  
})
function reset() {
    snake.getmsg().style.display="none";
    clearInterval(go)
}

resetbtn.addEventListener('click',reset)