class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400, 695, 800, 5, options);
      this.width = 800;
      this.height = 5;
      this.color = color("orange");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };