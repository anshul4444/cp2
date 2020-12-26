class Ground{
    constructor(x,y,w,h){
    var options={
        isStatic:true
    }
    this.w=w
    this.h=h
    this.x=x
    this.y=y
    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    World.add(world,this.body);

    }
    display(){
    push();
    var groundpos = this.body.position
    translate(groundpos.x,groundpos.y)
    fill("black")
    rect(0,0,this.w,this.h)
    pop();
    }
}