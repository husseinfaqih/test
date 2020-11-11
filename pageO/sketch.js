
var keys = [];
let words = [];
let word_count = {};
let font;
var counts= {};



function preload() {
  lines = loadStrings('blackcat.txt', count);
  font = loadFont('font/ARCADE_I.TTF');

}

function setup() {
  // noCursor();

  createCanvas(windowWidth, windowHeight);

  let colors = [color(255, 0, 11),
                color(255, 254, 59),
                color(0, 0, 0),
                color(0, 255, 58),
                color(255, 0, 248)];


  background (color(0, 0, 0));
  frameRate(2);

// noCanvas();
output = select('#output');

  // var canvas = createCanvas(1200, 1700);
  // canvas.parent('main');

  // textAlign(CENTER, CENTER);
}

function draw() {
  // background('white');
  textAlign(CENTER, CENTER);
  textFont('courier');


    var rs = random(keys);
    // console.log(rs);

/////////////////////
let alpha = 256;
let colors = [color(255, 0, 11, alpha),
              color(255, 254, 59, alpha),
              color(0, 0, 0, alpha),
              color(0, 255, 58, alpha),
              color(255, 0, 248, alpha)];
/////////////////////


    for(let i = 0; i <counts[rs]; i++){

    var xpos=random(10, width - 10)
    var ypos=random(10, height - 10)

    let bbox = font.textBounds(rs, xpos, ypos, 30);

    // fill('red');
    // rect(xpos-30,ypos-10,60,20)
    rectMode(CENTER);
    fill(colors[floor(random(colors.length))]);
    noStroke();
// rect(xpos-2,ypos+7, random(bbox.w), bbox.h);
// rect(xpos-2,ypos+7, random(550), bbox.h);
rect(bbox.x+10,ypos+7, random(550), bbox.h);

    textFont(font);
    textSize(30);
    fill('white');
    text((rs), xpos, ypos);


  }


}


function count() {

  var s = lines.join();
  // var words = s.split(/[,?!.\s]+/);
  var words = s.split(/[,?!.\s]+/);

  for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
        if (counts[word] === undefined) {
          counts[word] = 1;
          keys.push(word);
        } else {
          counts[word] = counts[word] + 1;
        }
      }


}


function mousePressed() {
  let colors = [color(255, 0, 11),
                color(255, 254, 59)]
                // color(0, 0, 0),
                // color(0, 255, 58),
                // color(255, 0, 248)];


  background (color(0, 0, 0));
}
