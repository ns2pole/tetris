class FourPieces {
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

    static getShapeRamdomly(xPosition, yPosition) {
        let random = Math.floor(Math.random() * 2);
        switch (random) {
            case 0:
                return new Shape_S(xPosition, yPosition);
            case 1:
                return new Shape_T(xPosition, yPosition);
        }
    }
}