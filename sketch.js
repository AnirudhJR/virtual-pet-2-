//Create variables here
var dog , happyDog ,database ,foodS , foodStock ; 
var dogImg , dogImg1 ; 
var FedTime , lastFed , FoodObj , feedDog;
var button , button1 ;

function preload()
{
  //load images here
dogImg = loadImage("dog.png")
dogImg1 = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createDog();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton(" Add Food ") ;
  addFood.position(800,95); 
  addFood.mousePressed(addsFoods);
}


function draw() {  
  background(46,139,87);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12 +"PM",350,30);
  }else if(lastFed == 0){
    text("Last Feed : 12Am",350,30);
  }else{
    text("Last Feed :"+lastFed + "AM",350,30);
  }

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
     lastFed = data.val();
  });
  

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
  
}

function wireStock(x){
  if(x<=0){
    x=0;
  }else{
    x = x-1 ;
  }

  database.ref('/').update({
    Food : x
  })

}
 
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function feedDog(){
  dog.addImage(haopyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/')/update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })

}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  }) 
}










