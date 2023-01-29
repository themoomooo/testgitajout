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

    this.monOjectDom = document.createElement('div');
    this.monOjectDom.style = `position:relative;background-color:${this.color};width:5px;height:50px;top:${this.y}px;left:${this.x}px`;
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
document.body.appendChild(snake.getOjectDom());
class Pomme {
    constructor(){

    }
}