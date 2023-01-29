


class Ball {
    constructor(width, height, color, radius){
        this.width = width;
        this.height = height;
        this.color = color;
        this.radius = radius;
    }
    monBallonRouge(){
        return `<div style='width:${this.width}px ; height:${this.height}px ; background:${this.color} ; border-radius:${this.radius}px'></div>`
    }
    
}

const monBallon = new Ball(200,200,'red',100);

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#show').addEventListener('click',function(){

        
        let show = monBallon.monBallonRouge();
        let div = document.querySelector('div');
        div.classList.toggle('active');
        if (div.classList'active') {
            div.innerHTML=show; 
        }else{

        }
    })

})
    
