class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image=loadImage("pitcher/dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
     // rectMode(CENTER);
      translate(pos.x,pos.y);
      fill("blue");
     // rect(0,0, this.width, this.height);
      //imageMode(CENTER);
      //image(this.image,0,0,this.width,this.height);
      pop();
    }
  }
  