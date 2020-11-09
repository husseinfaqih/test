var lines;
var keys = [ ];
var symbolS;
var kEys = [ ];
var output;

function preload() {
  lines = loadStrings('EAP.txt');
  font = loadFont('font/ARCADE_N.TTF');
}

t=[N=0],
draw=a=>{
	frameRate(5);

	let colors = [
								color("#FFAE00"),
                // color(116,238,21, alpha),
                color("#8C00FF"),
                // color(240,0,255, alpha),

							];

	var s = lines.join();
	var words = s.split(/[,?!.\s]+/);
	keys.push(words);
	var rs = random(keys);
	var txt = random(rs);

	N||createCanvas(W=windowWidth,W),
	background("#FF0000"),
	t[N++%(n=200)]=[f=(r=random)(W),
		g=r(W),W-f,W,f,g],t.find(a=>{
			t.find(([,,,,n,r])=>{
				m=mag(x=a[1]-n,y=a[5]-r)+1,m<50&&(
					strokeWeight(3),
					stroke(colors[floor(random(colors.length))]),
				line(a[4]+=cos(B=atan2(y,x)),
				a[5]+=sin(B),n,r))}
			),
			noStroke();
			fill(colors[floor(random(colors.length))]);
			text((txt), a[4]-20,a[5]+5,4)})
			textFont(font);
      textSize(30);
		};//#つぶやきProcessing
