export class TailPArts{
    constructor(x,y){
    this.domObject = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    this.y = y;
    this.color = 'blue';
    this.x = x;
    }
    initSvg() {
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('fill', this.color);
    }
    move(x,y) {
        this.x = x;
        this.y = y;
        this.initSvg();
    }

    getDomObject() {
        return this.domObject;
    }
}