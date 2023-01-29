

let terrain = document.querySelector('main');



class Ball {
    constructor(x, y, width, height, color, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
        this.monojectDom = null;



        this.setOjectDom();

    }

    setOjectDom() {

        this.monOjectDom = document.createElement('div');
        this.monOjectDom.style = `position:relative ; top:${this.y}px ; left:${this.x}px; width:${this.width}px ; height:${this.height}px ; background:${this.color}; border-radius:${this.radius}px`;
    }
    getOjectDom() {

        return this.monOjectDom;


    }
    move() {
        let widthballe = terrain.clientWidth
         if (this.x <= widthballe) {
                this.x += 15
                this.monOjectDom.style.left = `${this.x}px`;
                
         }else if(this.x = ) {
            
            
            this.monOjectDom;
         }
                
            
        




    
}
}


class Prog {

    constructor(terrain) {

        this.terrain = terrain;
        this.balles = [];

    }
    add(ball) {
        this.balles.push(ball);

    }

    run() {
        this.balles.forEach((ball) => {
            this.terrain.appendChild(ball.getOjectDom());
        });
         this.interval = setInterval(this.move.bind(this), 100);
    }

    move() {

        for (let i = 0; i < this.balles.length; i++) {
            this.balles[i].move();
        }
    }
}




const monBallon = new Ball(0, 155, 50, 50, 'red', 25);
const monBallon2 = new Ball(0, 155, 20, 20, 'blue', 10);

const monprog = new Prog(terrain);

monprog.add(monBallon);
monprog.add(monBallon2);
monprog.run();



/* 
document.body.append(monBallon.getOjectDom(), monBallon2.getOjectDom());
 */


terrain.addEventListener('click', function (event) {
    console.log(event);
})
