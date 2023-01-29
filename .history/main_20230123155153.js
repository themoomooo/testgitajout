

let terrain = document.querySelector('main');

class Ball {
    constructor(x,y,width, height, color, radius){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
        this.monojectDom = null;

        this.setOjectDom();
    }
    
    setOjectDom(){
        this.monOjectDom = document.createElement('div');
        this.monOjectDom.style = `position:relative ; top:${this.y}px ; left:${this.x}px; width:${this.width}px ; height:${this.height}px ; background:${this.color}; border-radius:${this.radius}px`;
    }
    getOjectDom(){

        return this.monOjectDom;
      
    }
    move(){
        this.x+=10;
        this.domObject.style.left = `${this.x}px`;
    }
    
}




class Prog {
   
   constructor(zoneTerrain){
       this.zoneTerrain = zoneTerrain;
       this.balles = [];
       console.log(this.zoneTerrain);
   }
   add(balle){
    this.balles.push(balle);
    
   }
   run() {
    this.balles.forEach((ball)=>{
        this.zoneTerrain.appendChild(ball.getDomObject());
    });
    
   }
    
}




const monBallon = new Ball(100,150,200,200,'red',100);
const monBallon2 = new Ball(100,350,100,100,'blue',50);
const monBallon3 = new Ball(20,20,200,200,'green',100);
const monBallon4 = new Ball(250,250,100,100,'black',50);
const monprog = new Prog (zoneTerrain);
monprog.add(monBallon);
monprog.add(monBallon2);
monprog.add(monBallon3);
monprog.add(monBallon4);
monprog.run();

/* 
document.body.append(monBallon.getOjectDom(), monBallon2.getOjectDom());
 */


    
