class Drop{
    constructor(x,y){
        this.body=Matter.Bodies.circle(x,y,10);
        this.body.isStatic=false;
        this.image= loadImage("mikulka-smile-grin.png")

    }
    update(){
        if(this.body.position.x>800){
            this.body.setPosition({x:random(10,190),y:100})
            
        }
    }
    draw(){
        const pos=this.body.position;
        const angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop()

    }
}