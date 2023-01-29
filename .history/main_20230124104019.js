

let terrain = document.querySelector('main');



class Ball {
    constructor(radius, x, y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.monojectDom = null;



        this.setOjectDom();

    }

    setOjectDom() {

        this.monOjectDom = document.createElement('div');
        this.monOjectDom.style = `position:relative;background-color:${this.color};border-radius:50%;width:${this.radius * 2}px;height:${this.radius * 2}px;top:${this.y}px;left:${this.x}px`;
    }
    getOjectDom() {

        return this.monOjectDom;


    }
    move() {
         let widthballe = terrain.clientWidth
        if (this.x+this.radius * 2 <= widthballe) {
                this.x += 12
                this.monOjectDom.style.left = `${this.x}px`;       
        } else {
            this.x -= 12
            this.y+=
            this.monOjectDom.style.left = `${this.x}px`;
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




const monBallon = new Ball(50, 0, 70, 'red');
const monBallon2 = new Ball(50,0,100, 'blue');

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
