var lines;
var counts;
var button;

function preload() {
  lines = loadStrings('EAP.txt');
  font = loadFont('font/VCR_OSD_MONO_1.001.ttf');

}
function setup() {
  noCanvas();
  output = select('#output');


  var s = RiTa.untokenize(lines.join(""));
  console.log(s);

  var span = createP(s);
  span.parent(output);

}
