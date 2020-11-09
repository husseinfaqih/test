var lines;
var keys = [ ];
var symbolS;
var kEys = [ ];
var output;
let width;
let height;
let drawArea;
const units = [];
const numUnits = 200;
let font;
let cam;
const furthestZ = -10000;
const cameraZ = 300;
const speed = 30;
let spaceWidth;
let spaceHeight;
const spaceGrowthFactor = 4;
let prevMouseX;
let prevMouseY;
const mouseLerpFactor = 0.1;
//onst words = 'random words worlds images texts letters space';
const words = 'cuvintele mele in mintea ta';
const defaultTextSize = 100;
const minTextSize = 50;
const maxTextSize = 200;

let fft;
let sound;
let analyzer;
let modeIndex = 0;
let fonts = [];

function preload() {
	fonts[0] = loadFont('font/8-bit-hud.ttf');
	// fonts[1] = loadFont('font/8-bit-hud.ttf');
	lines = loadStrings('EAP.txt');
}

function updateCurrentFont() {
	textFont(fonts[modeIndex]);
}

function mousePressed() {
	modeIndex = (modeIndex + 1) % fonts.length;
	updateCurrentFont();
}



function restart() {
	background("#EEFF00");
}

function gotFile(file) {
	if (file.type === 'image') {
		const img = createImg(file.data).hide();
		image(img, 0, 0, width, height);
	} else if (file.type === 'audio') {
		sound = loadSound(file, function successLoaded() {
			restart();
			sound.amp(0.5)
			sound.loop();
			analyzer.setInput(sound);
			fft.setInput(sound);
		});
	} else {
		console.log('Not an image file!');
	}
}



function setup() {

	width = windowWidth;
	height = windowHeight;
	spaceWidth = width * spaceGrowthFactor;
	spaceHeight = height * spaceGrowthFactor;
	//createCanvas(windowWidth, windowHeight);
	canvas = createCanvas(width, height, WEBGL);
	colorMode(HSB);
	angleMode(DEGREES);

	background(0);

	for (let i = 0; i < numUnits; i++) {
		units.push(new Unit({
			x: random() * spaceWidth,
			y: random() * spaceHeight,
			z: random() * furthestZ,
			rotateZ: 360 * random(),
			text: random(words.split(' ')),
			color: [random(360), 100, 100]
		}));
	}

	updateCurrentFont();
	textSize(defaultTextSize);
	cam = createCamera();
}


function draw() {


	background("#00AD26");

	//lights();
	//normalMaterial();
	if (prevMouseX && prevMouseY) {
		let x = lerp(prevMouseX, mouseX, mouseLerpFactor);
		let y = lerp(prevMouseY, mouseY, mouseLerpFactor);
		cam.setPosition(-width / 2 + x * spaceGrowthFactor, -height / 2 + y * spaceGrowthFactor, cameraZ);
		prevMouseX = x;
		prevMouseY = y;
	} else {
		prevMouseX = mouseX;
		prevMouseY = mouseY;
	}

	translate(-width / 2, -height / 2, 0);
	let scaleFactor;
	for (let i = 0; i < units.length; i++) {
		scaleFactor = 1;
		if (units[i].z > furthestZ) {
		}
		units[i].update(speed, scaleFactor);
		units[i].draw();
	}

	//drawStats();
}

function drawStats() {
	//textFont('Arial');
	//background(0);
	let fps = frameRate();
	strokeWeight(1)
	stroke(0);
	fill(0, 100, 100, 0.5);
	textSize(15)
	translate(height / 2 - 100, -width / 2 + 10);
	strokeWeight(0)
	fill(0, 0, 100, 0.5);
	rect(20, 0, 100, 20);
	strokeWeight(1)
	fill(0, 100, 100, 0.5);
	text(fps.toFixed(2) + ' - ' + (sound ? sound.currentTime().toFixed(2) : '0'), 30, 15);
}

class Unit {
	constructor(data) {
		this.x = data.x;
		this.y = data.y;
		this.z = data.z;
		this.rotateZ = data.rotateZ || 0;
		this.initialZ = data.z;
		this.color = data.color;
		this.text = data.text;
		this.scaleFactor = 1;
	}

	update(delta, scaleFactor) {
		if (this.z > cameraZ) {
			this.z = furthestZ;
		}
		this.z = delta + this.z;
		if (scaleFactor > 1.3) {
			this.rotateZ = (scaleFactor * 5 + this.rotateZ) % 360;
		}
		this.scaleFactor = scaleFactor || 1;
	}

	draw() {

		var s = lines.join();
    var words = s.split(/[,?!.\s]+/);
    keys.push(words);
    var rs = random(keys);
    var txt = random(rs);

		let colors = [
									color("#1A00AD"),
	                color("#FF005E")
								];

    textAlign(CENTER);

		push();
		translate(this.x, this.y, this.z);
		rotateZ(this.rotateZ);
		scale(this.scaleFactor);
		fill(colors[floor(random(colors.length))]);
		noStroke();
		text((txt), -20 * this.text.length, 0);
		//text(this.text, 0, 0);
		pop();
	}

}
