
var keys = [];
let words = [];
let word_count = {};
let xpos = 10;
let ypos = 0;
var counts= {};
let rotation = 90;


function preload() {
  lines = loadStrings('EAP.txt', count);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var canvas = createCanvas(1200, 500);
  // canvas.parent('main');
// noCanvas();
frameRate(100);
  textAlign(CENTER, CENTER);
  background('white');

}

function draw() {
  textFont('courier');

    var rs = random(keys);
    console.log(rs);

    for (let t=0; t < counts[rs]; t++) {

for (let i=0; i < 100; i++) {
  xpos = ((i % 60) * 20) + 10;

  for (var j=0; j < 2; j++) {
    fill(0 + (j * 10));
    rotate(radians(90));
    textSize(20);
    fill('black');
    // text((rs), random(10, width - 10), random(10, height - 10));
    text((rs), xpos,ypos);
    // text((rs), random(xpos),random(ypos));
  }

  if (i % 56 == 0) {
    // rotate(radians(random(90)));
    ypos += 6.4;
    // ypos = ypos - 10;
  }
}

}
}


function count() {

  var s = lines.join(" ");
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

// function mousePressed(){
// // prevents mouse press from registering twice
//   if (millis() - lapse > 500){
//     save('pix.jpg');
//     lapse = millis();
//   }
// }
