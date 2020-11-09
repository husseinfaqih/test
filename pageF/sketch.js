t=0
var keys = [];
let words = [];
let word_count = {};
let xpos = 10;
let ypos = 400;
var counts= {};
let rotation = 90;

function preload() {
  lines = loadStrings('EAP.txt');
  font = loadFont('font/ARCADE_R.TTF');

}


t=0
draw=_=>{

  let colors = [
                  // color('#90F000'),
                  color('#F00030'),
                  // color(240,0,255, alpha),
                  // color(0,30,255, alpha)
                ];
  ///////////////////


  var s = lines.join();
  var words = s.split(/[,?!.\s]+/);
  keys.push(words);
  var rs = random(keys);
  var txt = random(rs);

  frameRate(10)
  var rs = random(keys);
  let j=0;
let jmax = 74;
let jmin = 43;
  ;

createCanvas(w=windowWidth, windowHeight)+strokeWeight(1)
+ textSize(10)
// +strokeWeight(2)
// +stroke("black")
+ fill(colors[floor(random(colors.length))]);

f=map(sin(t+=.01),-1,1,64,200)
for(y=1;y<w;y+=30)
for(x=1;x<w;x+=30)
text((txt),cos(r=noise(x/w,y/w-t)*f)*TAU+x,sin(r)*TAU+y)
textFont(font);



}
