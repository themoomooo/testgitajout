


class Ball {
    constructor(width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    dessin(){
        return `<div style='width:${this.width}px ; height:${this.height}px ; background:${this.color} ; border-radius:${this.radius}px'></div>`
    }
    
}

const monBallon = new Ball(120,120,'red',60);
show = mon.dessin();


let div = document.querySelector('div');
div.innerHTML=show;
    
