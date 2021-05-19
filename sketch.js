//Create variables here
var dog, happyDog;
var dogImage, happyDogImage;
var database;
var foods, foodStock;


function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);

  dog =createSprite(250,300,100,100);
  dog.addImage(dogImage);
  dog.scale=0.3;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogImage);
  }
  


  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("red");
  textSize(15);
  text("food remaning:"+ foods,140,100);
  textSize(10);
  text("note : press up_arrow key to feed milk to tom",130,10,300,20);
}

function readStock(data){
  foods=data.val();
 // foodObj.updateFoodStock(food);
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}

//function feedDog(){
  
//}




