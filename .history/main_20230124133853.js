

let terrain = document.querySelector('main');



class Ball {
    constructor(radius, x, y, color) {
        this.color = color;
        this.position = {x:x,y:y};
        this.direction = {x:1,y:1}
        this.radius = radius;

    

        this.monOjectDom = document.createElement('div');

        this.setOjectDom();

    }

    setOjectDom() {

        this.monOjectDom.style = `position:relative;background-color:${this.color};border-radius:50%;width:${this.radius * 2}px;height:${this.radius * 2}px;top:${this.position.y}px;left:${this.position.x}px`;
    }
    getOjectDom() {

        return this.monOjectDom;


    }
    move() {
        this.position.x += 2 * this.direction.x;
        this.position.y += 2 * this.direction.y;
        this.setOjectDom();
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
        /*  this.interval = setInterval(this.move.bind(this), 800); */
    }

    move() {

        this.balles.forEach((ball) => {
            this.collision(ball);
            ball.move();
        });
    }
    collision(ball) {
      
        let hitBox = {x:ball.position.x, y:ball.position.y, width:ball.radius * 2, height: ball.radius * 2};
        
        console.log(hitBox);

        if(hitBox.x + hitBox.width >= this.terrain.clientWidth || hitBox.x <= 0 )
            ball.direction.x *=-1;

        if (hitBox.y + hitBox.height >= this.terrain.clientHeight || hitBox.y <= 0)
            ball.direction.y *= -1;

            return hitBox;    
    }

}


const monBallon = new Ball(10, 100, 100, 'red');
const monBallon2 = new Ball(10,50,50, 'blue');

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
