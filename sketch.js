var mainCar, car2, car3, car4, car5, road, parkLot, car, game;
var npc = [];
var npcpos = [];
var parkpos = [{x: 675, y: 605}, {x:475, y:605}, {x:275, y:605}, {x:875, y:605}, {x:275, y:225}, {x:475, y:225}, {x:675, y:225}, {x:875, y:225}];
var carImages = [];

function preload() {
  mainCar = loadImage("./assets/car.png");
  car2 = loadImage("./assets/car2.png");
  car3 = loadImage("./assets/car3.png");
  car4 = loadImage("./assets/car4.png");
  car5 = loadImage("./assets/car5.png");
  road = loadImage("./assets/road.png");
  parkLot = loadImage("./assets/lot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  carImages = [car2, car3, car4, car5];
  game.placeNpc();

  car = createSprite(width - 200, height /10);
  car.addImage(mainCar);
  car.scale = 0.4;
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 200, 0);
  game.play();
  drawSprites();
}
