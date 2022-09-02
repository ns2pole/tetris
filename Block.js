class Block {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.img = document.getElementById("blockImg");
    }

    canBePlacedIn(field) {
        if( field.map[this.y][this.x] == FIXED_BLOCK_CODE ){
            return false;
        } else if( field.map[this.y][this.x] == WALL_CODE ){
            return false;
        } else {
            return true;
        }
    }

    draw(context2d) {
        context2d.drawImage(this.img, this.x * ONE_CELL_SIZE, this.y * ONE_CELL_SIZE, BLOCK_SIZE, BLOCK_SIZE)
    }
}
