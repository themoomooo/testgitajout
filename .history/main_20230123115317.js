


class Ball {
    constructor(x, y, width, height, color, radius){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    dessin(){
        return `je suis une balle rouge avec `
    }
    
}


const draw = new Ball(50, 150,20,20,'red',10);
console.log(draw);

function drawing() {
    const body =document.querySelector('body');
    const balle =document.createElement('div');

    balle.style.top=`${draw.x}px`;
    balle.style.left=`${draw.y}px`;
    balle.style.width=`${draw.width}px`;
    balle.style.height=`${draw.height}px`;
    balle.style.color=`${draw.radius}px`;
    balle.style.radius=`${draw.x}px`;

    
    
}
drawing();