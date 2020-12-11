class Log extends BaseClass{
    constructor(x,y,height,angle){  //810,260,300, PI/2
      super(x,y,20,height,angle); //810,260,20,300,PI/2
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);
    }
    
  }