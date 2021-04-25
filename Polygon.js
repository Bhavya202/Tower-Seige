class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.polygon = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        if(this.polygon.bodyA){
        var pointA = this.polygon.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
};