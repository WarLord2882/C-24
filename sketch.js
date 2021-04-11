const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(300,150, 10, 5)
    rubber2 = new Rubber(300,150, 10, 5)
    rubber3 = new Rubber(300,150, 10, 5)
    rubber4 = new Rubber(300,150, 10, 5)
    rubber5 = new Rubber(300,150, 10, 5)
    rubber6 = new Rubber(300,150, 10, 5)
    rubber7 = new Rubber(300,150, 10, 5)
    rubber8 = new Rubber(300,150, 10, 5)

    iron = new Iron(150,150,50,50);

    stone = new Stone(460,200,5,5)

    round = new Round(550,200,50,5)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();

    iron.display();

    stone.display();

    round.display();
 
}