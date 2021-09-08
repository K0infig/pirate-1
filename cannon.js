class cannon{
    constructor(x, y, width, height, angle){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.cannonBase = loadImage("assets/cannonBase.png");
        this.cannon = loadImage("assets/canon.png");

    }

    display(){

        push();
        imageMode(CENTER);
        image(this.cannon,this.x, this.y, this.width, this.height);
        pop();


        image(this.cannonBase ,120,140, 230, 200);
        noFill();
    }
}