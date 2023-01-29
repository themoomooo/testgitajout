


class Ball {
    constructor(width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    dessin(){
        return `<div style='width:${this.width}pxheight:${this.height}px' 'color:${this.color}' 'border-radius:${this.radius}px''>John Doe</div>`
    }
    
}

const draw = new Ball(120,120,'red',60);
show = draw.dessin();


let div = document.querySelector('div');
div.innerHTML=show;
    
