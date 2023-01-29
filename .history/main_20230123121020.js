


class Ball {
    constructor(width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    dessin(){
        return `<div style='width:${this.width} height:${this.height} background:${this.color} border-radius:${this.radius}'>John Doe</div>`
    }
    
}

const draw = new Ball(20,20,'red',10);
console.log(draw.dessin);




    
    
