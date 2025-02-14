class Paper {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r=r;
        this.body=Bodies.circle(x, y, (this.r-20)/2,options);
        this.image = loadImage("pitcher/paper.png")
       
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
        
     }
}