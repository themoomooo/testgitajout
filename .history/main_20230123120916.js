


class Ball {
    constructor( width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    dessin(){
        console.log( `<div style='top:${this.x}left:${this.y} width:${this.width} height:${this.height} background:${this.color} border-radius:${this.radius}'>John Doe</div>`)
    }
    
}

const draw = new Ball(50, 150,20,20,'red',10);
console.log(draw);




    
    
