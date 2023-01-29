class sneake {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail=[{x:this.x,y:this.y}]
        this.rotateX=0
        this.rotateY=1

    }

    move() {
        var newRECT;
        if(this.rotateX == 1){
            newRECT={}
            x:this.tail[this.tail.length -1].x + this.size,
            y:this.tail[this.tail.lenght -1].y
           }
        }
    }
}