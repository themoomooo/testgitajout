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


        

		//Captures the key pressed by the player.
		var _this = this;
		document.onkeydown = function (event) {

            console.log(event.key);
			_this.move(event.key);

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
    
    move(key){   
        if(key==='ArrowRight'){
            this.x += 15
            this.monOjectDom.setAttribute('x', this.x);
         }else if(key==='ArrowLeft'){
            this.x -= 15
            this.monOjectDom.setAttribute('x', this.x);
         }else if(key==='ArrowUp'){
            this.y -= 15
            this.monOjectDom.setAttribute('y', this.y);
         }else if(key==='ArrowDown'){
            this.y += 15
            this.monOjectDom.setAttribute('y', this.y);
         }  
         if (this.X>=150) {
            this.x ==150
            this.monOjectDom.setAttribute('x', this.x);
         }
        }
        update() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
    
            /**
            Snake would not death when collapsed bounds of canvas.
            Coordinates are reversed when snake will collapse the bound.
            Example; if this.x = -1 (snake is collapsed to left bound of canvas)
            this.x will be 19(this.game.width - 1) to keep continue game at right bound of canvas
            */
            if (this.x > this.game.width - 1)
                this.x = 0;
            if (this.x < 0) {
                this.x = this.game.width -1
            }
            if (this.y > this.game.height - 1)
                this.y = 0;
            if (this.y < 0) {
                this.y = this.game.height - 1;
            }    
    


	
      }

const piste = new Piste(150,150,'red');
const snake = new Snake(10,10,40,20,'red');

surface.append(piste.getsvg(),snake.getsvg());


