class sneake {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail=[{x:this.x,y:this.y}]
        this.rotateX=



        this.setOjectDom();

    }

    setOjectDom() {

        this.monOjectDom = document.createElement('div');
        this.monOjectDom.style = `position:relative;background-color:${this.color};border-radius:50%;width:${this.radius * 2}px;height:${this.radius * 2}px;top:${this.y}px;left:${this.x}px`;
    }
    getOjectDom() {

        return this.monOjectDom;


    }
}