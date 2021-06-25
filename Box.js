class Box {
    constructor(x,y,w,h){
        var features = {
            isStatic : false, restitution:1
          
          }
          this.box = Bodies.rectangle (x,y,w,h,features)
          World.add(myWorld,this.box)
          this.w = w
          this.boximg = loadImage("wood1.png")
          this.h = h
    }
    display()
    {       
        push ()
        translate (this.box.position.x , this.box.position.y)
        rotate (this.box.angle)
        imageMode(CENTER)
 image(this.boximg,0,0,this.w,this.h)
 pop ()
    }
}