import { GAME_KEY, GAME_SIZE } from "../params.js";
import { Tail } from "./Tail.js";



export class Snake {


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
        
        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
    }

    getSvg() {
        return this.domObject;
    }

    move(direction) {
        switch (direction) {
            case GAME_KEY.right:
                this.x += 1;
                break;
            case GAME_KEY.left:
                this.x -= 1;
                break;
            case GAME_KEY.up:
                this.y -= 1;
                break;
            case GAME_KEY.down:
                this.y += 1;
                break;
        }

        this.initSvg();
    }
}