class SlingShot{
   constructor(bodyA){
        var options = {
            bodyA: bodyA,
            pointB: {x:200,y:100},
            stiffness: 0.04,   //rigidez
            length: 1
        
        }
    
        this.slingshot = Matter.Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }       
   }
       
   fly(){
     this.slingshot.bodyA = null;
   }

}