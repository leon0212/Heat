var xpos,ypos;
var ySize;
var liqcolor;


function setup() {
  canvas = createCanvas(640, 800);
  frameRate(30);

  
  aSlider = createSlider(1,5,2);
  aSlider.position(10, 220);
  aSlider.mousePressed(filler);
  aSlider.mouseReleased(filler);
  aSlider.class("sim-slider");
  
  tempWSlider = createSlider(1,110,20);
  tempWSlider.position(10, 290);
  tempWSlider.mousePressed(filler);
  tempWSlider.mouseReleased(filler);
  tempWSlider.class("sim-slider");

  
  boilButton = createButton('HEAT ON');
  boilButton.position(20,100);
  boilButton.mouseClicked(togglePlayButton);
  boilButton.class("sim-button");
  
  radioVert = createRadio();
  radioVert.position(0,330);
  radioVert.option('Water', '#A8D9ED');
  radioVert.option('Olive Oil', '#E6E0A8');
  radioVert.class('sim-radio vertical');
  radioVert.changed(switchColor);
  
  
  fruit = color('#7D7D7D');
  
  liqcolor=125,125,125,255;
}

function draw() {
background('lightgray');
  fill("black");
  textSize(15);
  textStyle(NORMAL);
  text("Amount of Liquid (kg)",7,216);
  text("Temperature of Liquid (C)",7,286);

  textSize(12);

  textSize(18);
  text("Heat Energy Needed: ",7,500);
///////////////////////////////////////////////////////////////////////////////////////////

drawContainer();
  fill(fruit);
  rect(310,ypos,180,ySize);


ySize=aSlider.value()*40;

if (aSlider.value()==1){
ypos=360;
}
if (aSlider.value()==2){
ypos=320;
}
if (aSlider.value()==3){
ypos=280;
}
if (aSlider.value()==4){
ypos=240;
}
if (aSlider.value()==5){
ypos=200;
}
  
  
}





function filler(){

}

function togglePlayButton(){
  
}

function drawContainer(){
  noStroke();
  rectMode(CORNER);
  fill(125,125,125,255);
  rect(300,200,200,225);
}


function switchColor(){
  fruit = radioVert.value();
}

