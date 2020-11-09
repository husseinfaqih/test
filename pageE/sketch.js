t=0
var keys = [];
let words = [];
let word_count = {};
var counts= {};


function setup() {
  output = select('#output');
  lines = loadStrings('EAP.txt');
  font = loadFont('font/8-bit-hud.ttf');
  // frameRate(5)
}

draw=_=>{
  // background("white");

t++||createCanvas(w=windowWidth,w)
translate(w/2,w/2)


let colors = [color(77,238,234, alpha),
                // color(116,238,21, alpha),
                color(255,231,0, alpha),
              ];

	  // background(colors[floor(random(colors.length))]);

var s = lines.join();
var words = s.split(/[,?!.\s]+/);
keys.push(words);
var rs = random(keys);
var txt = random(rs);


for(s=1,i=0;i<256;i++){
for(s*=1.02,z=i-t,k=s*w/3,js=0;js<1;js+=.125)
/////////////////
//////////////////
strokeWeight(10);
stroke("black");
fill(colors[floor(random(colors.length))]);
textSize(40);
textFont(font);

text((txt), p(0)+20,p(1)+20),s*5

strokeWeight(2);
fill(colors[floor(random(colors.length))]);
square(p(0),p(1),s*2)


}
}
p=n=>(noise(z*.01+js,n)-.5)*k
