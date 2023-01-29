let surface = document.querySelector('#surface')


const gamewidth = surface.clientWidth
const gameheight = surface.clientHeight

console.log(gamewidth,gameheight);



class Snake {
    constructor(x,y,color) {
        this.x = x;
        this.y = y;
       /*  this.size = size; */
        this.tail=[{x:this.x,y:this.y}]
        this.rotateX=0
        this.rotateY=1
        this.color=color

        this.setOjectDom();
    }

    setOjectDom() {

    this.monOjectDom = document.createElementNS('http://www.w3.org/2000/svg','rect');
    

    this.monOjectDom.style.width = '110px';
    this.monOjectDom.style.height = '110px';
    this.monOjectDom.style.top = this.x;
    this.monOjectDom.style.stroke = 'red';
    this.monOjectDom.style.fill = 'white';
 
    }
    getOjectDom() {

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

const snake = new Snake(50,80,'red');
surface.appendChild(snake.getOjectDom());
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