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
    move() {
      if(dir==='ArrowRight'){
        this.x += 10
        console.log(dir);
        console.log(this.x);
       /*  this.monOjectDom.style.left  */
      }else if(dir==='ArrowLeft'){
        this.x -= 1
      }else if(dir==='ArrowUp'){
        this.x -= 1
      }else if(dir==='ArrowDown'){
        this.x += 1
      }  
    }  
}
const piste = new Piste(150,150,'red');
const snake = new Snake(10,10,0,20,'red');

surface.append(piste.getsvg(),snake.getsvg());
function start() {
    snake.move()   
   }
   start()


class Pomme {
    constructor(){

    }
}