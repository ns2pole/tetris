class FourPieces {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.shapeCode;
    }

    canBePlacedIn(field) {
        for (let i = 0; i < this.blocks.length; i++) {
            if (!this.blocks[i].canBePlacedIn(field)) {
                return false;
            }
        }
        return true;
    }

    static getShapeCodeRandomly() {
        return Math.floor(Math.random() * HOW_MANY_SHAPES);
    }

    static getInitFourPieces() {
        switch (FourPieces.getShapeCodeRandomly()) {
            case SHAPE_CODE_OF_SHAPE_S:
                return new Shape_S(INITIAL_POSITION.x, INITIAL_POSITION.y);
            case SHAPE_CODE_OF_SHAPE_T:
                return new Shape_T(INITIAL_POSITION.x, INITIAL_POSITION.y);
        }
    }

    static getFourPiecesOf(shapeCode, xPosition, yPosition) {
        switch (shapeCode) {
            case SHAPE_CODE_OF_SHAPE_S:
                return new Shape_S(xPosition, yPosition);
            case SHAPE_CODE_OF_SHAPE_T:
                return new Shape_T(xPosition, yPosition);
        }
    }

    getInstanceMovedDown() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.x, this.y + 1);
    }

    getInstanceMovedRight() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.x + 1, this.y);
    }

    getInstanceMovedLeft() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.x - 1, this.y);
    }

}