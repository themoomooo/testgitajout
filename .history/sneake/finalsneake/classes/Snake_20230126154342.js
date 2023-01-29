

const GAME_KEY = {
    right: 39,
    left: 37,
    up: 38,
    down: 40,
    pause: 32,
};

class SnakePart {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

}


export class Snake {


    constructor(initialPartsAmount) {
        /**
        * @var {Element} domObjet
        */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        //Create the snake's parts.
        this.parts = [];
        for (var index = 0; index < initialPartsAmount; index++)
            this.parts.push(new SnakePart(x , y));



        this.init();

        this.initSvg();
    }
    addPart() {

		this lastPart = this.parts[this.parts.length - 1];
        console.log(lastPart);
		this.parts.push(new SnakePart(lastPart.x, lastPart.y));

	}

    init() {
        this.x = 10;
        this.y = 10;

        for (var index = this.parts.length - 1; index >= 0; index--) {

            var part = this.parts[index];

            if (index != 0) {

                part.x = this.parts[index - 1].x;
                part.y = this.parts[index - 1].y;

                //If the heads touches any part of the body it will die.
                if (this.x == part.x && this.y == part.y) {
                    this.die();
                }

            }
            else {

                part.x = this.x;
                part.y = this.y;

            }
        }
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