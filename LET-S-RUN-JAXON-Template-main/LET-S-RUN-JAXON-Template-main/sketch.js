
var p,boy,road,img,bomb,bi,bomb2,bi2,b,b2
function preload(){
  boy = loadAnimation("Runner-2.png","Runner-1.png")
  bi = loadAnimation("bomb.png")
  bi2 = loadAnimation("bomb.png")
  img = loadAnimation("path.png")
}

function setup(){
  createCanvas(1920,1000);
  road = createSprite(510,440,200,200)
  road.addAnimation("roan",img)
  road.scale = 2
  p = createSprite(510,890,100,200)
  p.addAnimation("run",boy)
  p.scale = 0.10
  b = createSprite(890,500,200,1000)
  b.visible = false
  b2 = createSprite(200,500,200,1000)
  b2.visible = false
}

function draw() {
  background(rgb(52, 235, 222))
  p.collide(b)
  p.collide(b2)
  road.y = road.y + 10
  if(keyDown("right")){
    p.x = p.x + 5
  }
  if(keyDown("left")){
    p.x = p.x - 5
  }
  if(road.y > 1000){
    road.y = height/2
  }
  drawSprites()
}
