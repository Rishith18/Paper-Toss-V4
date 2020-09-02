class Paper {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x,y,40,40,options);
        this.color = color("white");
        this.width = 55;
        this.height = 55;
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(this.color);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}