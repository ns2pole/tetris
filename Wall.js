class Wall {
    constructor(positionVec2D) {
        this.position = positionVec2D;
        this.img = document.getElementById("wallImg");
    }

    draw(context2d) {
        context2d.drawImage(this.img, this.position.x * ONE_CELL_SIZE, this.position.y * ONE_CELL_SIZE, BLOCK_SIZE, BLOCK_SIZE)
    }
}
