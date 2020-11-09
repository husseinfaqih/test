var keys = [];
let words = [];
let word_count = {};
var counts= {};
let str = "i have a radio= robot9000";
let str_arr = [];

let font;
let sdgreg;
function preload() {
font = loadFont("font/Error.ttf");
  lines = loadStrings('EAP.txt',count);

}

function setup() {
  frameRate(2);
createCanvas(windowWidth, windowHeight, WEBGL);
colorMode(HSB, 360, 100, 100, 100);
let strs = str.split(" ");
for (let i = 0; i < strs.length*10; i++) {
  let x = random(-width / 2, width / 2);
  let y = random(-height / 2, height / 2);
  let z = random(-width*5, width/2);
  str_arr.push(new Type(strs[i%strs.length], x, y, z));
}
}

function draw() {
  // background("#8000FF");
background("#FF002B");
orbitControl();
for (let i = 0; i < str_arr.length; i++) {
  str_arr[i].update();
  str_arr[i].display();
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

class Type {
constructor(_str, _x, _y, _z) {
  this.str = _str;
  this.x = _x;
  this.y = _y;
  this.z = _z;
}

update() {
  this.z += 10;
  if(this.z > width/2){
    this.z = -width*5;
  }
}

display() {

  var rs = random(keys);


  push();
  translate(this.x, this.y, this.z);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(100);
  // fill("#9500FF");
  fill("#00FF1E");
  text((rs), 0, 0);
  pop();
}
}
