            class LAKRI {
    constructor(x,y,w,h,a){
        var features = {
            isStatic : false, restitution:1
          
          }
          this.lakri = Bodies.rectangle (x,y,w,h,features)
          Matter . Body.setAngle(this.lakri,a)
          World.add(myWorld,this.lakri)

          this.w = w
          this.h = h
          this.plankimg = loadImage("wood2.png")
    }
    display()
    {
        push ()
        translate (this.lakri.position.x , this.lakri.position.y)
        rotate (this.lakri.angle)
        imageMode(CENTER)
 image          (this.plankimg,0,0,this.w,this.h)
 pop ()
    }
}           