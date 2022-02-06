
 var magicCarpet, flying_MagicCarpet, movingMagicCarpet;
 var wizard, talking_Wizard, flyingWizard;
 
 function preload(){
   magicCarpet = loadImage("magicCarpet.jpg");
   wizard_still = loadImage("wizard.png"); 
   blueLED = loadImage("blueLed.png");
   redLED = loadImage("redLed.png");
   purpleLED = loadImage("purpleLed.png");
   greenLED = loadImage("greenLed.png");
   orangeLED = loadImage("orangeLed.png");
   
 }

 function setup(){
  
  createCanvas(windowWidth, windowHeight);

 }
 

 function draw() {
  
  background(51);
  drawsprites()
  
}



