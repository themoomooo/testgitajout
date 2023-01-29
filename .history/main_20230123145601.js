



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
    
}

class Prog {
   
    startProg(){

        let balles =[];
        balles.push(new Ball(100,150,200,200,'red',100));
        balles.push(new Ball(100,350,100,100,'blue',50));
        balles.push(new Ball(350,350,600,600,'blue',50));
    }
    
}




const monBallon = new Ball(100,150,200,200,'red',100);
const monBallon2 = new Ball(100,350,100,100,'blue',50);

document.body.append(monBallon.getOjectDom(), monBallon2.getOjectDom());



    
