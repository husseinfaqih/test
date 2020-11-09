
var txt;

function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);

  output = select('#output');
  txt = loadStrings('files/spam.txt', fileready);
  font = loadFont('font/full Pack 2025.ttf');

}

// The data from the file comes in as the array lines
function fileready() {

  let alpha = 256;
  let colors = [color(77,238,234, alpha),
                color(116,238,21, alpha),
                color(255,231,0, alpha),
                color(240,0,255, alpha),
                color(0,30,255, alpha)];

  // background (colors[floor(random(colors.length))]);

  // var s = txt.join('\n');
  // var words = s.split(/(\W+)/);
  // var words = s.split(/[,?!.\s]+(\W+)/);

  var s = txt.join('\n');
  var words = s.split(/[,?!.\s]/);

console.log(words);




  for (var i = 0; i < words.length; i++){
    var span = createSpan(words[i]);
    span.parent(output);
    span.style('font-size', '50px')
    span.style('background-color', colors[floor(random(colors.length))])

    if (!/\W+/.test(words[i])){
      // span.style('color','#F55D3E');
      // span.mousePressed(oRiginal);
      span.mouseOver(oRiginal);

    }
    // if (/\W+/.test(words[i])){
    //   span.style('background-color',
    //   color(random(255),random(255),random(255)));
    // }

}
  // console.log(words);

  // var par = createP(text);
  // par.id('text');


}
function oRiginal(){

  let alpha = 256;
  let colors = [color(77,238,234, alpha),
                color(116,238,21, alpha),
                color(255,231,0, alpha),
                color(240,0,255, alpha),
                color(0,30,255, alpha)];

// this.html ('        ');
this.style ('background-color', colors[floor(random(colors.length))]);
}

function highlIght(){
console.log(this.html());

// this.html (' ');
this.style ('color', color(0,0,0));
}
