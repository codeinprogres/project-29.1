class Stone{
    constructor(x,y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.circle(x, y, width, height);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellispeMode(CENTER);
        ellipse(this.x, this.y, this.width, this.height);
        pop();
    }
}