class Block {
    constructor(positionVec2D) {
        this.position = positionVec2D
        this.img = document.getElementById("blockImg");
    }

    canBePlacedIn(field) {
        if(field.map[this.position.y][this.position.x] == FIXED_BLOCK_CODE ){
            return false;
        } else if(field.map[this.position.y][this.position.x] == WALL_CODE ){
            return false;
        } else {
            return true;
        }
    }

    draw(context2d) {
        context2d.drawImage(this.img, this.position.x * ONE_CELL_SIZE, this.position.y * ONE_CELL_SIZE, BLOCK_SIZE, BLOCK_SIZE)
    }
}
