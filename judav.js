class JUDVA {
    constructor(x,y){

        var op = {
    bodyA:x,
    pointB:y,
    length:30,
    stiffness:0.04

    }
    this.sl1 = loadImage("sling1.png")
    this.sl2 = loadImage("sling2.png")
    this.sl3 = loadImage("sling3.png")
    this.conn = Constraint.create(op)
    World.add(myWorld,this.conn)
}
    display()
    {      
        
        if(this.conn.bodyA != null){
            image(this.sl1,200,60,29,109.5)
            image(this.sl2,178,55,31,71.5)

            var a = this.conn.bodyA.position
            var b = this.conn.pointB

            line (a.x-10,a.y+25,b.x-10,b.y+25)
            line (a.x+20,a.y+25,b.x+20,b.y+25)
            image(this.sl3,a.x-20,a.y-10,10,32)
 }

    }
    Break() {

        this.conn.bodyA = null
        
        }

}


