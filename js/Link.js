class Link{
    constructor(bodyA,bodyB){
        var lastLink = bodyA.body.bodies.length-2

        console.log(lastLink)
   
        this.link = Constraint.create({
            
            bodyA:bodyA.body.bodies[lastLink],
            
            bodyB:bodyB.body,
            length:10,
            stiffness:1

        })
        World.add(world,this.link)
    }

}