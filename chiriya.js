class BIRD {
    constructor(x,y,w,h){
        var features = {
            isStatic : false, restitution:1
          
          }
          this.bird = Bodies.rectangle (x,y,w,h,features)

          World.add(myWorld,this.bird)
          this.w = w
          this.h = h
this.arr = []
          this.birimg = loadImage("bird.png")
          this.smokeImage=loadImage("smoke (1).png")
    }
    display()
    {
       
        push ()
        translate (this.bird.position.x , this.bird.position.y)
        rotate (this.bird.angle)
        imageMode(CENTER)
 image(this.birimg,0,0,this.w,this.h)
 pop ()

 if(this.bird.velocity.x>=10){
     this.arr.push ([this.bird.position.x,this.bird.position.y])
 }
for(var i=0;i<this.arr.length;i=i+1)
{
    image (this.smokeImage,this.arr[i][0],this.arr[i][1])
}
    }
}