class FourPiece {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
    }

    canBePlacedIn(field) {
        for (let i = 0; i < this.blocks.length; i++) {
            if (!this.blocks[i].canBePlacedIn(field)) {
                return false;
            }
        }
        return true;
    }
}