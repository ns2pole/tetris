class FourPieces {
    constructor(positionVec2D) {
        this.position = positionVec2D
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
                return new Shape_S(INITIAL_POSITION_VEC_2D);
            case SHAPE_CODE_OF_SHAPE_T:
                return new Shape_T(INITIAL_POSITION_VEC_2D);
        }
    }

    static getFourPiecesOf(shapeCode, positionVec2D) {
        switch (shapeCode) {
            case SHAPE_CODE_OF_SHAPE_S:
                return new Shape_S(positionVec2D);
            case SHAPE_CODE_OF_SHAPE_T:
                return new Shape_T(positionVec2D);
        }
    }

    getInstanceMovedDown() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(0, 1)));
    }

    getInstanceMovedRight() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(1, 0)));
    }

    getInstanceMovedLeft() {
        return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(-1, 0)));
    }

}