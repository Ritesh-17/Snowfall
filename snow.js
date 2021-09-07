class Snow {
    constructor(x,y,width,height) {
        var options = {
            'frictionAir' : 0.1,
            'restitution' : 2
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.snow1 = loadImage("snow4.jpg");
        this.snow2 = loadImage("snow5.jpg");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snow1, 0, 0, this.width, this.height);
        image(this.snow2, 100, 50, this.width-10, this.height-10);
        pop()
    }
}