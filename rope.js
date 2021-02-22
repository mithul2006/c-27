class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        var options={
            bodyA:body1,
            bodyB:body2,
            point:{x:offsetX,y:offsetY}
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display()
    {
      var  pointA=this.rope.bodyA.position
      var pointB=this.rope.bodyB.position
      strokeWeight(2)
      var ankerX=pointB.x+this.offsetX
      var ankerY=pointB.y+this.offsetY

      line(pointA.x,pointA.y,ankerX,ankerY)


    }
}