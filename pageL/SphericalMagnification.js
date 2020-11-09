var lines;
var keys = [ ];
var symbolS;
var kEys = [ ];
var output;
var Colors = new Array("#000000","#ffffff");


function preload() {
  lines = loadStrings('EAP.txt');
  font = loadFont('font/VCR_OSD_MONO_1.001.ttf');
}

function changeBG() {
  // fill("black");
      rect(random(1000),random(1000),500,1500);
}

function setup() {
  createCanvas(windowWidth, 3000);
  fill(0);
  frameRate(10);

}


function draw() {
  window.scroll(0,random(3000));


  /////////////////////
  let alpha = 256;
  // let colors = [color(204,17,240, alpha),
  //               color(99,0,255, alpha),
  //               color(255,0,141, alpha),
  //               color(209,78,234, alpha),
  //               color(249,99,99, alpha)];
  /////////////////////

  let colors = [color(77,238,234, alpha),
                color(116,238,21, alpha),
                color(255,231,0, alpha),
                color(240,0,255, alpha),
                color(0,30,255, alpha)];

	  background(colors[floor(random(colors.length))]);

    var s = lines.join();
    var words = s.split(/[,?!.\s]+/);
    keys.push(words);
    var rs = random(keys);
    var txt = random(rs);

    textAlign(CENTER);



    var n = 50;
    var stepX = n;
    var stepY = n;


  for (var gridY=0; gridY < height; gridY += stepY) {
    for (var gridX=0; gridX < width; gridX += stepX*3) {
      let bbox = font.textBounds(rs, 20, 30, 30);
      rectMode(CENTER);
      fill(colors[floor(random(colors.length))]);
      noStroke();
      rect(gridX,gridY-7, 140, bbox.h+30);

      fill(colors[floor(random(colors.length))]);
      textFont(font);
      textSize(30);
      text((txt).toUpperCase(), gridX, gridY);

     }
     changeBG();
   }







      //
      // var c = color(random(255), random(255), random(255));
      // span.style('background-color', c);



}




// function highlight() {
//   console.log(this.html());
//   this.html('rainbow');
//   var c = color(random(255), random(255), random(255));
//   this.style('background-color', c);
//   //var s = this.html().replace(
//
//   //console.log(this);
//   //console.log('hover');
// }
