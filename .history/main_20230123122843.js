


class Ball {
    constructor(width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    monballonrouge(){
        return `<div style='width:${this.width}px ; height:${this.height}px ; background:${this.color} ; border-radius:${this.radius}px'></div>`
    }
    
}

const monBallon = new Ball(120,120,'red',60);

document.addEventListener('DOMContentLoaded', function (){
    let show = monBallon.dessin();
    let div = document.querySelector('div');
    div.innerHTML=show;
})
    
