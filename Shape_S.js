class Shape_S extends FourPiece {
    constructor(xPosition, yPosition, blockSize) {
        super(); // 仕様上super()をthisを使う前にsuper()を呼び出しておく必要がある。
        this.x = xPosition;
        this.y = yPosition;
        this.blocks = new Array();
        this.blocks.push(new Block(this.x, this.y, this.blockSize));
        this.blocks.push(new Block(this.x + 1, this.y, this.blockSize));
        this.blocks.push(new Block(this.x - 1, this.y + 1, this.blockSize));
        this.blocks.push(new Block(this.x, this.y + 1, this.blockSize));
        this.blockSize = blockSize;
        
    }

    canMoveTo(xPosition, yPosition, field) {

    }

    draw(context2d) {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw(context2d);
        }
    }
}
