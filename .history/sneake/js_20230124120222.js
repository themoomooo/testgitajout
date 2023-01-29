class sneake {
    constructor(radius, x, y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.monojectDom = null;



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