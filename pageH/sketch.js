
var keys = [];
let words = [];
let word_count = {};
let xpos = 10;
let ypos = 0;
var counts= {};
let rotation = 90;



function preload() {
  lines = loadStrings('EAP.txt', count);
  font = loadFont('font/ARCADE_N.TTF');

}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent('main');
// noCanvas();
frameRate(10);
  textAlign(CENTER, CENTER);
}

function draw() {

  let colors = [
                // color("#00FF1E"),
                // color("#FF00EA"),
                color(77,238,234, alpha),
                color(116,238,21, alpha)
                ];


  background(color(255,231,0, alpha));


    var rs = random(keys);
    console.log(rs);

  //   for(let i = 0; i <counts[rs]; i++){
  //   // textSize(counts[rs]*10);
  //   textSize(20);
  //   fill('black');
  //   text((rs), random(10, width - 10), random(10, height - 10));
  //
  // }

    // for(let t = 0; t <counts[rs]; t++){

for (let i=1; i < 200; i++) {
  xpos = ((i % 60) * 20) + 10;

  for (var j=1; j < rs.length; j++) {


    fill(0 + (j * 10));
    rotate(radians(90));
    textFont(font);
    textSize(20);
    fill(colors[floor(random(colors.length))]);
    // text((rs), random(10, width - 10), random(10, height - 10));
    // text((rs), xpos,ypos);
    text((rs), random(xpos),random(ypos));


  }

  if (i % 56 == 0) {
    // rotate(radians(45));
    ypos += 6.4;
    // ypos = ypos - 10;
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
