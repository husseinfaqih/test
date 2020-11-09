var lines;
let myDiv;
var keys = [ ];

function preload() {
  lines = loadStrings('EAP.txt');
}


function setup() {
output = select('#output');


}



var template =


[" "],

parts = [], dashes = " X X X X X X X X ", bottom = "the black cat --------- " +
"edgar alan poe",
lanes = [[]], n, title;

// Adjectives
parts[0] = [" "];

// Names for people, by profession or otherwise, either gender-neutral or female
parts[1] = [" "];

// Names for people indicating males only
parts[2] = [" "];

// Non-human animals, mobile/intentional things, including some abstractions
parts[3] = [" "];

// People (singular) who sound like they may be entering a country
parts[4] = [" "];

// Things that could possibly go nova
parts[5] = [" "];

// Sets of points (plural)
parts[6] = [" "];

// Place names (proper, singular)
parts[7] = [" "];

// Different sorts of texts or writings (singular)
parts[8] = [" "];

// Things which could be sparked (singular)
parts[9] = [" "];

// Vehicles, or in one case a group of vehicles
parts[10] = [" "];

// Weapons and weapon-like things
parts[11] = [" "];

// All people, regardless of gender
parts[12] = [" "].concat(parts[1].slice(1));
parts[12] = parts[12].concat(parts[2].slice(1));

// Plural form only of people
parts[13] = [" "].concat(parts[12].slice(1));
for (n = 0; n < parts[13].length; n += 1) {
    parts[13][n] = parts[13][n].replace("_", "");
}

// Either a person or a different animate entity
parts[14] = [" "].concat(parts[12].slice(1));
parts[14] = parts[14].concat(parts[3].slice(1));

// Things that can escape include EITHER and a few others
parts[15] = [" "].concat(parts[14].slice(1));
parts[15] = parts[15].concat([" ", " "]);

// Things that can be pointed include weapons and a compass
parts[16] = [" "].concat(parts[11].slice(1));
parts[16] = parts[16].concat([" "]);

// Things that can be lasered; almost anything including the horizon
parts[17] = [" "].concat(parts[14].slice(1));
parts[17] = parts[17].concat(parts[7].slice(1));
parts[17] = parts[17].concat(parts[16].slice(1));
parts[17] = parts[17].concat([" ", " "]);


function choose(array) {
    " ";
    return array[Math.floor(Math.random() * array.length)];
}

function sentence() {
    // "use strict";
    // var phrase = "", i, adjective, np, number;

    var phrase = "", i, adjective, np, number;

//////////////////TEXTFROMFILE//////////////////
////////////////////////////////////////////////


    var s = lines.join("\n");
    var words = s.split(/\W+/);
    keys.push(words);
    var rs = random(keys);

    console.log(rs);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

    phrase = choose(rs);

    return phrase;
}

function new_lane() {
    " ";
    var lane;
    lane = "□□□□■■■□□□░░□□□□□□□□■" + dashes.slice(0, Math.random() * 30) + sentence();
    return lane;
}

function populate() {
    " ";
    var i;
    for (i = 0; i < 24; i += 1) {
        lanes[i] = new_lane() + new_lane() + new_lane();
    }
    lanes[0] = dashes.replace(/-/g, "-");
    lanes[13] = lanes[0];
    lanes[14] = lanes[0];
    lanes[27] = lanes[0];
    lanes[1] = dashes.slice(0,500) + bottom;

}

function go() {
    " ";
    var div = document.getElementById("x"), within, i;

///right to left///
    // for (i = 1; i < 100; i += 1) {

///random Right to Left///
    for (i = 1; i < 15; i += 1) {
        within = div.childNodes[i];
        if (lanes[i].length <= 84) {
            lanes[i] = lanes[i] + new_lane();
        }
        lanes[i] = lanes[i].slice(1 + Math.random() * 4);
        within.innerHTML = lanes[i].slice(0, 80);
    }

    ///random Left to Right///

    for (i = 15; i < 27; i += 1) {
        within = div.childNodes[i];
        if (lanes[i].length <= 200) {
            lanes[i] = new_lane() + lanes[i];
        }
        lanes[i] = lanes[i].slice(0, lanes[i].length - (1 + Math.random() * 4));
        within.innerHTML = lanes[i].slice(lanes[i].length - 80);
    }
}


function prompt() {
    " ";
    setInterval(go, 70);
    clearInterval(title);
}

function start() {
    " ";
    var div = document.getElementById("x"), within, i;
    populate();
    for (i = 0; i < 25; i += 1) {
        within = document.createElement("div");
        within.innerHTML = dashes;
        div.appendChild(within);
    }

    title = setInterval(prompt, 50);
}
