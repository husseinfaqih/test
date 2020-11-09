
var changement = 1;
var changeTime = null;

//Initialisation du tableau
var app = app || {

  init: function(){
    setTimeout(function(){
      app.change_to(languages[lang]['transi0_1Frame1']);
      document.getElementById("trace").style.opacity = "1";
      }, 7000);
      changeTime = new Date().getTime();
      app.animate_input();
      app.count();

    for (i=0; i<80;i++){
      var newDiv = document.createElement('div');
      newDiv.className = 'letter';
      document.getElementById('letters').appendChild(newDiv);
    }
  },

  i: 0,

  //Compte du nombre de passage sur le texte
  count: function(){
    $("#letters").on("mouseleave", function(){
      if (changeTime + 2000 <= new Date().getTime()){
        changement = changement + 1;
        changeTime = new Date().getTime();
      }
    });
  },

  //Définition des différents textes à afficher
  animate_input: function(){
    $("#letters").on("mouseover", function(){
      app.i = 0;
      if (changeTime + 2000 <= new Date().getTime()){
        switch (changement){
          case 1 :
            app.change_to(languages[lang]['transi0_1Frame2']);
            document.getElementById("trace").style.opacity = "0";
            setTimeout(function(){
              var obj = document.getElementById("father");
              var old = document.getElementById("trace");
              obj.removeChild(old);
              }, 700);
            break;
          case 2 :
            app.change_to(languages[lang]['transi0_1Frame3']);
            break;
          case 3 :
            app.change_to(languages[lang]['transi0_1Frame4']);
            break;
          case 4 :
            app.change_to(languages[lang]['transi0_1Frame5']);
            break;
          case 5 :
            app.change_to(languages[lang]['transi0_1Frame6']);
            break;
          case 6 :
            app.change_to(languages[lang]['transi0_1Frame7']);
            break;
          case 7 :
            app.change_to(languages[lang]['transi0_1Frame8']);
            break;
          case 8 :
            app.change_to(languages[lang]['transi0_1Frame9']);
            break;
          case 9 :
            app.change_to(languages[lang]['transi0_1Frame10']);
            break;
          case 10 :
            app.change_to(languages[lang]['transi0_1Frame11']);
            break;
        }
      }
    });
  },

  // Fonction de changement des caractères
  change_to: function(chars){
    //chars = chars.replace(" ",".");
    //Settings
    var char_cycles = 20; //how many nonsense letters it cycles through
    var char_cycle_length = 50; //length of each cycle in milliseconds

    const currentSentence = $('.letters').text();
    let newSentence = [];

    if (app.i < char_cycles) {
        setTimeout(function() {
            app.i++;
            for (var x = 0; x < chars.length; x++) {
                newSentence[x] = app.all_characters[Math.floor((Math.random() * 36))];
            }

            $('.letters').text(newSentence.join(''));
            app.change_to(chars);
        }, char_cycle_length);
    } else {
      $('.letters').text(chars);
    }

    if(changement >= 11){
      setTimeout(function(){
        location.href=('tab1.php');
      }, 3000);
    }

  },

  all_characters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']

}


//Lancement général
$(document).ready(function(){
  app.init();
  document.getElementById("frame1").innerHTML = languages[lang]['turnOnAudio'];

});
