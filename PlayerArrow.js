class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      this.trajectory=[];
      
      
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        var j;
        for(j=0;j<this.trajectory.length;j++){
          this.trajectory[i]=this.body.position;
        }
    
        push();
        translate(pos.x, pos.y);
        ellipse(x,y,w) 
          this.posX=x;
          this.posY=y;
          this.width=w;
          
          var i;
          for(i=0;i<this.trajectory.length;i++){
            this.trajectory[i].ellipse();
            this.trajectory[i].display();
          }
        
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    
    
    }
}