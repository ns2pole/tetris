class Block {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.shape = 1;
        this.img = document.getElementById("blockImg");
    }

    draw(context2d) {
        context2d.drawImage(this.img, this.x * ONE_CELL_SIZE, this.y * ONE_CELL_SIZE, BLOCK_SIZE, BLOCK_SIZE)
    }
}
