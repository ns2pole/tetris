class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getAddedVecFor(vec2D) {
        let clone = new Vec2D(this.x, this.y);
        clone.x += vec2D.x;
        clone.y += vec2D.y;
        return clone;
    }
}
