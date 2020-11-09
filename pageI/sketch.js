
var keys = [];
let words = [];
let word_count = {};
let xpos = 10;
let ypos = 0;
var counts= {};
let rotation = 90;


function preload() {
  lines = loadStrings('EAP.txt', count);
  font = loadFont('font/8-bit-hud.ttf');

}

function setup() {
  createCanvas(windowWidth, 5000);
  // var canvas = createCanvas(1200, 500);
  // canvas.parent('main');
// noCanvas();
frameRate(10);
  textAlign(CENTER, CENTER);
  background('#009DFF');

}


function draw() {

  let colors = [color("#FF007B"),
                color("#00A6FF"),
              ];
              textAlign(CENTER);

                // noStroke();
                // fill(colors[floor(random(colors.length))]);
                //     rect(random(1000),random(1000),500,1500);

    var rs = random(keys);
    console.log(rs);
    for (let t=0; t < counts[rs]; t++) {
      for (let i=0; i < 60; i++) {
        xpos = ((i % 60) * 20) + 10;

  for (var j=0; j < 1; j++) {
    rotate(radians(90));
    let bbox = font.textBounds(rs, 20, 30, 10);
    // rectMode(CENTER);
    // // fill(colors[floor(random(colors.length))]);
    //       noFill();
    // stroke(colors[floor(random(colors.length))]);
    // strokeWeight(2);
    // rect(xpos+5,ypos-12, 140, bbox.h+30);

    // fill(0 + (j * 10));
    fill(colors[floor(random(colors.length))]);
    textFont(font);
    textSize(10);
    noStroke();
    text((rs), xpos,ypos);
  }

  if (i % 56 == 0) {
    ypos += 6.4;
  }
}

}
}


function count() {

  var s = lines.join(" ");
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
