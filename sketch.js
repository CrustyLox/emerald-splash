let home_screen;
let home_screen_Frames;
let retry_button;
let option = 'HOME';
let playButton;
let play_button0;
let play_button1;
let i = 0;
let j = 0;
let counter1 = -60;
let counter2 = -120;
let counter3 = -180;
let counter4 = -240;
let jotaro;
let jotaro_0;
let speed = 1;//fix
class roadRoller{
  constructor(_image,_x1,_y1,_speed,_lane){
    this.image = _image
    this.x1 = _x1
    this.y1 = _y1
    this.lane = _lane
    this.speed = _speed
  }
  displayRoadRoller(){
    image(this.image, this.x1, this.y1,60,60);
  }
  roadRollerMovement(){
    this.x1 -= this.speed
    if (this.x1 < 0){
      this.x1 = width - 50
    }
  }
}
class lane{
  constructor(_laneNumber,_y1,_y2){
  this.laneNumber = _laneNumber
  this.y1 = _y1
  this.y2 = _y2
  }
}
class button{
  constructor(_button,_x1,_x2,_y1,_y2,_image,_hoverImage){
  this.button = _button;
  this.x1 = _x1;
  this.x2 = _x2;
  this.y1 = _y1;
  this.y2 = _y2;
  this.image = _image
  this.hoverImage = _hoverImage
  }
  Display_HoverAnimation(){
    image(this.hoverImage, this.x1, this.y1);
  }
  Display_normal(){
    image(this.image, this.x1, this.y1);
  }
  Display_button(){
    if (this.x1<mouseX && mouseX<this.x2 && this.y1<mouseY && mouseY<this.y2){
      this.Display_HoverAnimation()
    }else{
      this.Display_normal()
    }
  }
  onClick() {
    if (this.x1<mouseX && mouseX<this.x2 && this.y1<mouseY && mouseY<this.y2){
      if(option == 'END' || option == 'HOME')
      ResetAllVariables()
      console.log(roadRoller1.x1)
      option = this.button
      }
    }
  }
class character{
  constructor(_image,_x1,_y1,_lane){
    this.image = _image;
    this.x1 = _x1;
    this.y1 = _y1;
    this.lane = _lane
  }
  Display_character(){
    image(this.image, this.x1, this.y1, 60, 60)
  }
  Character_movement(){
    if (keyCode === DOWN_ARROW) {
      if (this.lane != 3){
        this.y1 += height/6.3
        this.lane += 1
      }
    }
    if (keyCode === UP_ARROW) {
      if (this.lane != 1){
        this.y1 -= height/6.3
        this.lane -= 1
      }
    }
  } 
}
function preload(){
home_screen_Frames = [loadImage('Images/Start_Backround1.jpg'),loadImage('Images/Start_Backround2.jpg'),loadImage('Images/Start_Backround3.jpg'),loadImage('Images/Start_Backround4.jpg'),loadImage('Images/Start_Backround5.jpg'),loadImage('Images/Start_Backround6.jpg'),loadImage('Images/Start_Backround7.jpg'),loadImage('Images/Start_Backround8.jpg')];
play_button0 = loadImage('Images/retry_button.png');
play_button1 = loadImage('Images/retry_button.png');//fill animated button
jotaro_0 = loadImage('Images/jotaro.png');
}

function setup() { 
  frameRate(60)
  createCanvas(504,504);

  play_button = new button('PLAY',width/2.625 ,width/1.901886,height/1.575,height/1.48235,play_button0,play_button1);
  jotaro = new character (jotaro_0, 50, height/3.5,1);
  lane1 = new lane (1,height/3.818181,height/2.377358)
  lane2 = new lane (2,height/2.377358,height/1.726027)
  lane3 = new lane (3,height/1.726027,height/1.35483871)
  roadRoller1 = new roadRoller(jotaro_0,100000,100000,5,0)
  roadRoller2 = new roadRoller(jotaro_0,100000,100000,5,0)
  roadRoller3 = new roadRoller(jotaro_0,100000,100000,5,0)
  roadRoller4 = new roadRoller(jotaro_0,100000,100000,5,0)
  roadRollers = [roadRoller1,roadRoller2,roadRoller3,roadRoller4]
}
function draw() {
  if(option == 'HOME'){
      home_screen = home_screen_Frames[i];
      j += 1
      if(j == 6){
        j = 0
        i += 1
      }
      if(i == 8){
        i = 0
      }
      
      image(home_screen, 0 , 0, width, height);
  }
  if (option == 'PLAY'){
    background(220);
    line(0,height/3.818181, width,height/3.818181)
    line(0,height/2.377358, width,height/2.377358)
    line(0,height/1.726027, width,height/1.726027)
    line(0,height/1.35483871, width,height/1.35483871)
    jotaro.Display_character();
    if(counter1 == 180){
      laneNum = Math.floor(Math.random() * 3) + 1;
      console.log(laneNum);
      roadRoller1.x1 = width - 50
      roadRoller1.y1 = height/3.5 + (laneNum-1)*height/6.3
      roadRoller1.lane = laneNum
      counter1 = 0 
    }
    counter1 += 1
    if(counter2 == 180){
      laneNum = Math.floor(Math.random() * 3) + 1;
      roadRoller2.x1 = width - 50
      roadRoller2.y1 = height/3.5 + (laneNum-1)*height/6.3
      roadRoller2.lane = laneNum
      counter2 = 0
    }
    counter2 += 1
    if(counter3 == 180){
      laneNum = Math.floor(Math.random() * 3) + 1;
      roadRoller3.x1 = width - 50
      roadRoller3.y1 = height/3.5 + (laneNum-1)*height/6.3
      roadRoller3.lane = laneNum
      counter3 = 0
    }
    counter3 += 1
    if(counter4 == 180){
      laneNum = Math.floor(Math.random() * 3) + 1;
      roadRoller4.x1 = width - 50
      roadRoller4.y1 = height/3.5 + (laneNum-1)*height/6.3
      roadRoller4.lane = laneNum
      counter4 = 0
    }
    counter4 += 1
      
    roadRoller1.roadRollerMovement()
    roadRoller2.roadRollerMovement()
    roadRoller3.roadRollerMovement()
    roadRoller4.roadRollerMovement()
    roadRoller1.displayRoadRoller()
    roadRoller2.displayRoadRoller()
    roadRoller3.displayRoadRoller()
    roadRoller4.displayRoadRoller()
    collisionChecker()
  }
  if (option == 'END'){
    background(220)
    
  }
}

function mousePressed() {
  play_button.onClick() 
  print(option)
}

function keyPressed() {
  if (option == 'PLAY'){
    jotaro.Character_movement()
  }
}

function drawBackround(){
  if (option == 'HOME'){
    for (let i = 0; i < home_screen_Frames.length; i++) {
      home_screen = home_screen_Frames[i];
      image(home_screen, 0 , 0, width, height);
    }
  }
}
function collisionChecker(){
  if (((jotaro.x1 + 60) > roadRoller1.x1) && (jotaro.lane == roadRoller1.lane)){
    option = 'HOME'
  }
  if (((jotaro.x1 + 60) > roadRoller2.x1) && (jotaro.lane == roadRoller2.lane)){
    option = 'HOME'
  }
  if (((jotaro.x1 + 60) > roadRoller3.x1) && (jotaro.lane == roadRoller3.lane)){
    option = 'HOME'
  }
  if (((jotaro.x1 + 60) > roadRoller4.x1) && (jotaro.lane == roadRoller4.lane)){
    option = 'HOME'
  }
}
function ResetAllVariables(){
  counter1 = -60;
  counter2 = -120;
  counter3 = -180;
  counter4 = -240;
  roadRoller1.x1 = 100000;
  roadRoller2.x1 = roadRoller3.x1 = roadRoller4.x1 = roadRoller1.y1 = roadRoller2.y1 = roadRoller3.y1 = roadRoller4.y1 = 100000;
}
