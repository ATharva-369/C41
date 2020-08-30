class Umbrella {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 20);
        this.x = x
        this.y = y
        loadImage("")
    }

    display() {
        ellipse(this.x, this.y, 20, 20);
    }
}