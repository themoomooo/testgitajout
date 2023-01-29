const GAME_KEY = {
    right: 39,
    left: 37,
    up: 38,
    down: 40,
    pause: 32,
};


export class Apple {


    constructor() {
        /**
        * @var {Element} domObjet
        */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        this.init();
        
        this.initSvg();
    }

    init() {
        this.x = 10;
        this.y = 10;

    }

    initSvg() {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 37); 

        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
        this.domObject.setAttribute("style", "fill:red")
        
    }
    
    getSvg() {
        return this.domObject;
    }
    
}