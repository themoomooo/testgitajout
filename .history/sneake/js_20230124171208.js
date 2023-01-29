let surface = document.querySelector('#surface')
const gamewidth = surface.clientWidth
const gameheight = surface.clientHeight
console.log(gamewidth,gameheight);
class Piste {
    constructor(x,y,color,) {
        this.x = x;
        this.y = y;
        this.color=color

        this.setsvg();
    }

    setsvg() {

    this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg','rect');
    

    this.monOjectDom.style.width = `${this.x}px`;
    this.monOjectDom.style.height = `${this.y}px`;
    this.monOjectDom.style.stroke = this.color;
    this.monOjectDom.style.fill = 'white';
    this.monOjectDom.style.position = 'absolute';
    this.monOjectDom.style.fill = 'white';
    
    

    }
    getsvg() {

    return this.monOjectDom;
    }
}
 
var dir
window.addEventListener("keydown", (event) => {
    dir=event.key
}, true);



class Snake {
    constructor(width,height,x,y,color,) {
        this.width=width;
        this.height=height;
        this.x = x;
        this.y = y;
        this.color=color

        this.xSpeed = 1;
		this.ySpeed = 0;
        this.canChangeDirection = true;


        this.canChangeDirection = true;

		//Captures the key pressed by the player.
		var _this = this;
		document.onkeydown = function (event) {

			_this.controller(event.which);

		};

        this.setsvg();
    }

    setsvg() {

    this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg','rect');
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
    /* move() {
      if(dir==='ArrowRight'){
         this.monOjectDom.style.left = '50px'
      }else if(dir==='ArrowLeft'){
        this.x -= 1
      }else if(dir==='ArrowUp'){
        this.x -= 1
      }else if(dir==='ArrowDown'){
        this.x += 1
      }  
    }   */
    move()
    


	controller(key) {

		//Left.
		if (key == 37 && this.ySpeed != 0 && this.canChangeDirection) {

			this.canChangeDirection = false;
			this.xSpeed = -1;
			this.ySpeed = 0;

		}

		//Right.
		if (key == 39 && this.ySpeed != 0 && this.canChangeDirection) {

			this.canChangeDirection = false;
			this.xSpeed = 1;
			this.ySpeed = 0;

		}

		//Up.
		if (key == 38 && this.xSpeed != 0 && this.canChangeDirection) {

			this.canChangeDirection = false;
			this.xSpeed = 0;
			this.ySpeed = -1;

		}

		//Down.
		if (key == 40 && this.xSpeed != 0 && this.canChangeDirection) {

			this.canChangeDirection = false;
			this.xSpeed = 0;
			this.ySpeed = 1;

		}
   }
}

const piste = new Piste(150,150,'red');
const snake = new Snake(10,10,0,20,'red');

surface.append(piste.getsvg(),snake.getsvg());


