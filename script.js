/*
Weclome to My Screen Saver!
Things to Know:
 - Background Changes colour
 - It works on any sized screen, this means that the circles will bounce off the side no matter the screen size
 - If you did not notice, there is a circle trail for each object
 - The circles move at different speeds
 - The circles start in the middle and get pushed out to the sides
 - The circles are translucent,  "fill(r[i], g[i], b[i], 200)"
 - You can turn on sliders on lines 62 and 83.
*/



//Global
//Fading background
let amt, startColor, newColor;
//# of balls (You can change this)
let ballCount = 100;
// x and y position variable to equal an empty array
let x = [];
let y = [];
//Speed
let xSpeed = [];
let ySpeed = [];
//Size
let size = [];
// Colour
let r = [];
let g = [];
let b = [];
//Sliders!
let slider1;
//Multimedia
let font;

//Setup
function setup() {
//Frame Rate
  frameRate(60);
//Canvas
  createCanvas(windowWidth, windowHeight);
//Background Stuff
  startColor = color(255,255,255,50);
  newColor = color(random(255),random(255),random(255),50);
  amt = 0;
  background(startColor);
  //for loop
  for (let i = 0; i < ballCount; i++) {
    //Inside the for loop:
    //Set x and y position to be the center
    x[i] = width / 2;
    y[i] = height / 2;
    //Set the speeds to be random
    xSpeed[i] = random(-2, 2);
    ySpeed[i] = random(-2, 2);
    //  Set the size to be random
    size[i] = random(10, 50);
    //  Set the colors to be random
    r[i] = random(256);
    g[i] = random(256);
    b[i] = random(256);
  /*Sliders!
    textFont();
     slider1 = createSlider(0, 100, 0);
  slider1.position(10, 10);
*/
  }//close for loop

}
//Draw
function draw() {
  
 // print(frameCount);//prints how many frames have gone by in Console
 //fade function changese the colour of the background
  fade();
    //name
fill(r,g,b);
  textFont(font)
  strokeWeight(0.1);
  stroke(255);
  textSize(20);
  text("Josh", width/100, height*0.99);//used this instead of a certain coordinate so it will be the same for all screen sizes
  
/*Slider!
textFont('Georgia');
let ballCount = slider1.value();
  	text('Ball Count '+ballCount,150,25);
*/
  
  //Iterate through a new for loop to change the properties in order to animate the balls
  for (let i = 0; i < ballCount; i++) {
    //Inside the for loop:
    //Increment speed for x position
    x[i] = x[i] + xSpeed[i];
    //Increment speed for y position
    y[i] = y[i] + ySpeed[i];
    //  Reverse x direction if ball hits left or right sides
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
    }
    //  Reverse y direction if ball hits top or bottom sides
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1;
    }

    //  Set random R, G, B values
    fill(r[i], g[i], b[i], 200);

    //  Style to have no strokes
    strokeWeight(0.5);

    //  Draw the bouncing balls
    ellipse(x[i], y[i], size[i]);
    
    

  }
} 
//Window Resized
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//Fade
function fade() {
//For the background changing colour
  background(lerpColor(startColor, newColor, amt));

  amt += 0.01;
  //IF code for the speed of the changing colours
  if(amt >= 7){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255), 50);
  }  

}
////////////////


// Preload
function preload(){
  font = loadFont('PTSerif-Regular.ttf')
}