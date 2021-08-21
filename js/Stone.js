class Stone{
    constructor(x,y,width,height){
        var options = 
        {
        isStatic:false,
        restitiution:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight(2);
        fill("brown");
        ellipse(0,0,this.width,this.height)
        
        pop()
    }
}