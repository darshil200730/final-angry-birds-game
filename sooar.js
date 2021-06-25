class PIG {
    constructor(x,y,w,h)
    {
        this.a = 255;
        var features = {
            isStatic : false, restitution:1
          
          }
          this.pig = Bodies.rectangle (x,y,w,h,features)
          World.add(myWorld,this.pig)
          this.w = w
          this.h = h
          this.sooarimg = loadImage("enemy.png")
    }
    display()
    {
        //console.log(this.pig.speed)
if(this.pig.speed<=3){
        push ()
      translate (this.pig.position.x , this.pig.position.y)
        rotate (this.pig.angle)
        imageMode(CENTER)
 image(this.sooarimg,0,0,this.w,this.h)
 pop ()
    }
    else{
        World.remove(myWorld,this.pig)
        push()
        tint (255,this.a)
        image(this.sooarimg,this.pig.position.x,this.pig.position.y,this.w,this.h)
        this.a = this.a-10
        pop()    
    }
}}
    
