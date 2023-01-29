export class Tail {

    constructor() {
        this.tailParts = [];
    }

    add(tailPart) {
        this.tailParts.push(tailPart);
    }
    move(x, y, headX, headY, tailPartNumber=0) {
        
        if (this.tailParts.length > 0 && tailPartNumber in this.tailParts) {
         
            // on garde en mémoire la position actuel de la partie
            let oldX = this.tailParts[tailPartNumber].x;
            let oldY = this.tailParts[tailPartNumber].y;

            // on affecte les positions recues (ancienne position de la tête ou de la partie précédente)
            this.tailParts[tailPartNumber].move(x,y);

            // si on a une collision tête/queue
            if (x == headX && y == headY) {
                console.log('Collision tête queue')
                return false;
            }

            // on rappelle la fonction pour la partie de la queue suivante
            return this.move(oldX, oldY, headX, headY, tailPartNumber+1)
        }

        return true;
    }
}