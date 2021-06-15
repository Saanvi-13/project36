//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  dogImg=loadImage('images/dogImg.png')
  dogImg1=loadImage('images/dogImg1.png')
	//load images here
}

function setup() {
	
  
  createCanvas(500, 500);
  
  database=firebase.database();

  dog=createSprite(800,220,150,150);
  dog.addImage(dogImg);
 
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  if(keyWentUP(UP_ARROW)){
dog.addImg(dogImg);

  }
  drawSprites();
  //add styles here
 

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({

  })
}



