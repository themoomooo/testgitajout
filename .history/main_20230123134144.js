


class Ball {
    constructor(x,y,width, height, color, radius){
        this.x=
        this.y
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    monBallonRouge(){
        return `<div style='width:${this.width}px ; height:${this.height}px ; background:url(${this.color}); background-size: cover ; background-position: center; border-radius:${this.radius}px'></div>`
    }
    
}

const monBallon = new Ball(200,200,'1.png',100);

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#show').addEventListener('click',function(){
        let show = monBallon.monBallonRouge();
        let div = document.querySelector('div');
        div.classList.toggle('active');
        if (div.classList.contains('active')) {
            div.innerHTML=show; 
        }else{
            div.innerHTML='Pas de ballon en ce moment'; 
        }
    })

})
    
