class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color("grey");
      this.image = loadImage("dustbin.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill(this.color);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };