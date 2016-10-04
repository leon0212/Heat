var xpos,ypos;
var ySize;
var liqcolor;
var shtext;
var boilpt;
var flame;
var templ;

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
  radioVert.option('Mercury', '#C4C4C4');
  
  radioVert.class('sim-radio vertical');
  radioVert.changed(switchColor);
  
  
  liquidc = color('#7D7D7D');
  
  liqcolor=125,125,125,255;
}

function draw() {
background('lightgray');
  fill("black");
  textSize(15);
  textStyle(NORMAL);
  text("Amount of Liquid (kg)",7,216);
  text("Temperature of Liquid (C)",7,286);
  text("Specific Heat: ",310,170);
  text(shtext+" J/kgC ",420,170);
  text("Heat liquid from : "+ tempWSlider.value()+"C to "+ boilpt,300,520);
  text(aSlider.value()+" kg ",160, 247);

  
  textSize(18);
  text("Heat Energy Needed To : ",7,580);
  text("Get To Boiling Point ",7,600);
  textSize(25);
  text("Q = (Mass)(Specific Heat)(Change in temp)",20,58);
  
///////////////////////////////////////////////////////////////////////////////////////////
if (flame==true){
drawFlame();
Q=(aSlider.value()*shtext*(templ-tempWSlider.value()));
textSize(35);
text(Q+" J",7,650);
}
drawContainer();
drawStove();
  fill(liquidc);
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

if (radioVert.value() == '#A8D9ED') {
shtext=4186;
boilpt=100+ "C (Boiling Point)";
templ=100;
}

if (radioVert.value() == '#E6E0A8') {
shtext=1970;
boilpt=207+"C (Smoking Point)";
templ=207;
}

if (radioVert.value() == '#C4C4C4') {
shtext=140;
boilpt=357 + "C (Boiling Point)";
templ=357;
}
  
  
    }





function filler(){

}

function togglePlayButton(){
flame=true;
}

function drawContainer(){
  noStroke();
  rectMode(CORNER);
  fill(125,125,125,255);
  rect(300,200,200,225);
}

function drawFlame(){
  noStroke();
  rectMode(CORNER);
  fill('#E69539');
  rect(300,420,200,30);
}

function drawStove(){
  noStroke();
  rectMode(CORNER);
  fill(100,100,100,255);
  rect(280,435,240,30);
  rect(312,415,10,30);
  rect(354,415,10,30);
  rect(396,415,10,30);
  rect(438,415,10,30);
  rect(480,415,10,30);
}


function switchColor(){
  liquidc = radioVert.value();
}

