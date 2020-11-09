
var txt;

function setup() {
  noCanvas();
  output = select('#output');
  txt = loadStrings('EAP.txt', fileready);

}

// The data from the file comes in as the array lines
function fileready() {

  var s = txt.join('\n');
console.log(words);
  var words = s.split(/(\W+)/);
  // var words = s.split(/\W+/);


  for (var i = 0; i < words.length; i++){
    var span = createSpan(words[i]);
    span.parent(output);

    if (!/\W+/.test(words[i])){
      // span.style('color','#F55D3E');
      span.mouseOver(highlight);


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
function highlight(){
console.log(this.html());

this.html (' ');
this.style('color', "#21A0A0");

}
