class Shape_T extends FourPieces {
    constructor(positionVec2D) {
        super(positionVec2D); // 仕様上super()をthisを使う前にsuper()を呼び出しておく必要がある。
        this.blocks = new Array();
        this.blocks.push(new Block(positionVec2D, BLOCK_SIZE));
        this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0)), BLOCK_SIZE));
        this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1)), BLOCK_SIZE));
        this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 0)), BLOCK_SIZE));
        this.shapeCode = SHAPE_CODE_OF_SHAPE_T;
    }

    draw(context2d) {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw(context2d);
        }
    }

}
