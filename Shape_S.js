class Shape_S extends FourPieces {
    constructor(xPosition, yPosition) {
        super(xPosition, yPosition); // 仕様上super()をthisを使う前にsuper()を呼び出しておく必要がある。
        this.blocks = new Array();
        this.blocks.push(new Block(this.x, this.y, BLOCK_SIZE));
        this.blocks.push(new Block(this.x + 1, this.y, BLOCK_SIZE));
        this.blocks.push(new Block(this.x - 1, this.y + 1, BLOCK_SIZE));
        this.blocks.push(new Block(this.x, this.y + 1, BLOCK_SIZE));
        this.shapeCode = SHAPE_CODE_OF_SHAPE_S;
    }

    draw(context2d) {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw(context2d);
        }
    }


}
