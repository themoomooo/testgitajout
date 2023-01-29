


class Ball {
    constructor(x, y, width, height, color, radius){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    
}


const draw = new Ball(50, 150,20,4,'red',10);
console.log(draw);

function draw() {
    const balle =document.createElement('div');
    balle.style.top=`${draw.x}px`;
    balle.style.left=`${draw.y}px`;
    balle.style.top=`${draw.x}px`;
    balle.style.top=`${draw.x}px`;
    balle.style.top=`${draw.x}px`;

    
}