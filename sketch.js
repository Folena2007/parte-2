var fundo;
var chao;
var scooby, scoobyI, scoobyP;
var salsicha, salsichaI;
var velma, velmaI;


function preload() {
fundo = loadImage("./imagens/background.jpg");
scoobyI = loadAnimation("./imagens/correndo 1.png","./imagens/correndo 2.png", "./imagens/correndo 3.png", "./imagens/correndo 4.png", "./imagens/correndo 5.png");
scoobyP = loadAnimation("./imagens/parado.png");
salsichaI = loadImage("./imagens/salsicha.png");
velmaI = loadImage("./imagens/velma.png");
}


function setup() {
 createCanvas(windowWidth, windowHeight);

 chao = createSprite(width/2, height -20, width, 20);
 chao.x = chao.width / 2;
 chao.shapeColor = "black";

 scooby = createSprite(50, height -70, 20, 50);
 scooby.addAnimation("correndo", scoobyI);
 scooby.addAnimation("parado", scoobyP);

 salsicha = createSprite(250, height -95, 20, 50);
 salsicha.addImage("salsicha", salsichaI);
 salsicha.scale = 1.20;

 velma = createSprite(300, height -80, 20, 50);
 velma.addImage("velma", velmaI);
 velma.scale = 1.20;
}



function draw() {
scooby.collide(chao);
background(fundo);
drawSprites();

}









