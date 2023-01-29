let surface = document.querySelector('#surface')


const gamewidth = surface.clientWidth
const gameheight = surface.clientHeight

console.log(gamewidth,gameheight);



class Snake {
    constructor(x,y,wx,hy,color,) {
        this.x = x;
        this.y = y;
        this.width = wx;
        this.height = hy;
        this.color=color

        this.setsvg();
    }

    setsvg() {

    this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg','rect');
    

    this.monOjectDom.style.width = `${this.wx}px`;
    this.monOjectDom.style.height = `${this.hy}px`;
    this.monOjectDom.style.top = ;
    this.monOjectDom.style.left = '10';
    this.monOjectDom.style.stroke = this.color;
    this.monOjectDom.style.fill = 'white';
    

    }
    getsvg() {

    return this.monOjectDom;

    }
   /*  move() {
        var newRect;
        if(this.rotateX == 1){
            newRect={
            x: this.tail[this.tail.length -1].x + this.size,
            y: this.tail[this.tail.lenght -1].y
           }
        }else if(this.rotateX == -1){
            newRect={
            x: this.tail[this.tail.length -1].x - this.size,
            y: this.tail[this.tail.lenght -1].y
           }
        }else if(this.rotateY == -1){
            newRect={
            x: this.tail[this.tail.length -1].x + this.size,
            y: this.tail[this.tail.lenght -1].y
           }
        }else if(this.rotateY == -1){
            newRect={
            x: this.tail[this.tail.length -1].x - this.size,
            y: this.tail[this.tail.lenght -1].y
           }
        }
        this.tail.shift()
        this.tail.push(newRect);
    } */
}    

const piste = new Snake(150,150,'red');
const snake = new Snake(10,10,'red');
surface.append(piste.getsvg(),snake.getsvg());
window.addEventListener('keyup',(e)=>{
    switch (e.key) {
        case 'ArrowLeft':
            snake.style.left = parseInt(snake.style.left)- 10 + 'px';
            break;
        case 'ArrowRight':
            snake.style.left = parseInt(snake.style.left)+ 10 + 'px';
            break;
        case 'ArrowUp':
            snake.style.left = parseInt(snake.style.top)- 10 + 'px';
            break;  
         case 'ArrowUp':
            snake.style.left = parseInt(snake.style.top)+ 10 + 'px';
            break;        
        default:
            break;
    }
})

class Pomme {
    constructor(){

    }
}