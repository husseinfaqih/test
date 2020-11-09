var index = 0;
var yy = 0;
var xx = 0;
var Colors = new Array("#000000","#ffffff");
this.scroll(120,100);

function qw() {
      this.scroll(120,100);
}
function zxc( ) {
window.setTimeout( "zxc()", 1);
      xx = Math.round(    50 + Math.random() * 90);

      yy = Math.round(  220 + Math.random() * 350);

      this.scroll(xx,yy);
      changeBG();
}
function changeBG() {
      index = Math.round(Math.random() * (Colors.length-1) );
      document.bgColor = Colors[index];
}
