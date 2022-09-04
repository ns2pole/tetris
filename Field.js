class Field {
    constructor(){
        this.map  = [
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1],
        ];
    }

    getWidth() {
        return this.map[0].length;
    }

    getDepth() {
        return this.map.length;
    }
    
    getBlocks() {
        let blocks = new Array();
        for( let y = 0; y < this.map.length; y++ ){
            for( let x = 0; x < this.map[y].length; x++ ){
                //固まったブロックは2で表現する。
                if( this.map[y][x] == FIXED_BLOCK_CODE ){
                    blocks.push(new Block(new Vec2D(x, y)))
                }
            }
        }
        return blocks;
    }

    getWalls() {
        let walls = new Array();
        for( let y = 0; y < this.map.length; y++ ){
            for( let x = 0; x < this.map[y].length; x++ ){
                if( this.map[y][x] == WALL_CODE ){
                    walls.push(new Wall(new Vec2D(x, y)))
                }
            }
        }
        return walls;
    }

    draw(context2d) {
        const walls = this.getWalls();
        for(let i = 0; i < walls.length; i++ ){
            walls[i].draw(context2d);
        }
        
        const blocks = this.getBlocks();
        for( let i = 0; i < blocks.length; i++ ){
            blocks[i].draw(context2d);
        }
    }

    place(fourPiece) {
        for( let i = 0; i < fourPiece.blocks.length; i++ ){
            this.map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = FIXED_BLOCK_CODE;
        }
    }
}
