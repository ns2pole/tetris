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
        for( let i = 0; i < this.map.length; i++ ){
            for( let j = 0; j < this.map[i].length; j++ ){
                //固まったブロックは2で表現する。
                if( this.map[i][j] == FIXED_BLOCK_CODE ){
                    blocks.push(new Block(j, i, BLOCK_SIZE) )
                }
            }
        }
        return blocks;
    }

    getWalls() {
        let walls = new Array();
        for( let i = 0; i < this.map.length; i++ ){
            for( let j = 0; j < this.map[i].length; j++ ){
                if( this.map[i][j] == WALL_CODE ){
                    walls.push(new Wall(j, i) )
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
            this.map[fourPiece.blocks[i].y][fourPiece.blocks[i].x] = FIXED_BLOCK_CODE;
        }
    }
}
