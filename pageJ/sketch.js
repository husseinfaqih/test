var keys = [];
let words = [];
let word_count = {};
var counts= {};

function preload() {
// font = loadFont("DisplayOTF.otf");
  lines = loadStrings('EAP.txt',count);
  font = loadFont('font/8-bit-hud.ttf');

}

let randInt = (a, b) => (floor(random(a, b)));

function setup() {
	createCanvas(windowWidth, windowHeight);
	//colorMode(HSB, 100);
	noLoop();
	noStroke();
}

function mousePressed() {
  var rs = random(keys);


	let pixelSize = 20;
	let pixWidth = width/pixelSize;
	let pixHeight = height/pixelSize;
	let nRectangles = floor(width*height)/1000;
	let maxW = randInt(6, 10);
	let maxH = randInt(6, 10);

	let alpha = 225;
	let colors = [
                color(77,238,234, alpha),
                // color(116,238,21, alpha),
                // color(255,231,0, alpha),
                color(240,0,255, alpha),
                color(0,30,255, alpha)
              ];

	background(colors[1]);
	for (let i = 0; i < nRectangles; i++) {
		fill(colors[floor(random(colors.length))]);
		let x = randInt(0, pixWidth) * pixelSize;
		let y = randInt(0, pixHeight) * pixelSize;
		let w = randInt(1, maxW) * pixelSize;
		let h = randInt(1, maxH) * pixelSize;
		rect(x, y, w, h);
    textFont(font);
    textSize(40);
    text((rs),x, y, w, h);

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
      // var rs = random(keys);


}
