// game.js
// Color Confusion

// Fisher-Yates shuffle
// source: https://bost.ocks.org/mike/shuffle/

// global
var ans;
var score = 0;

function shuffle(array) {
    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
        i = Math.floor(Math.random() * m);
        m = m - 1;

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function color_confusion() {
	// shuffle word array
    // shuffle color array
    // change A-G colors
    // change wordA-wordG
    // chose a random number between 0-6
    // use to know witch is the right answer
    // right answer: add points loop
    // wrong answer: game over
	
    /*
    var jumbo = [document.getElementById("A"), 
                 document.getElementById("B"), 
                document.getElementById("C"),
                document.getElementById("D"),
                 document.getElementById("E"),
                 document.getElementById("F"),
                 document.getElementById("G"),
                 document.getElementById("H"),
                 document.getElementById("I")];
    var words = [document.getElementById("wordA"),
                 document.getElementById("wordB"),
                 document.getElementById("wordC"),
                 document.getElementById("wordD"),
                 document.getElementById("wordE"),
                 document.getElementById("wordF"),
                 document.getElementById("wordG"),
                 document.getElementById("wordH"),
                 document.getElementById("wordI")];
                 */
    var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Black", "Gray", "Saddlebrown"];
    var i;
    
    // shuffle background color
    colors = shuffle(colors);
    document.getElementById("A").style.backgroundColor = colors[0];
     document.getElementById("B").style.backgroundColor = colors[1];
     document.getElementById("C").style.backgroundColor = colors[2];
     document.getElementById("D").style.backgroundColor = colors[3];
     document.getElementById("E").style.backgroundColor = colors[4];
     document.getElementById("F").style.backgroundColor = colors[5];
     document.getElementById("G").style.backgroundColor = colors[6];
     document.getElementById("H").style.backgroundColor = colors[7];
     document.getElementById("I").style.backgroundColor = colors[8];
    
    // change words
    colors = shuffle(colors);
     document.getElementById("wordA").innerHTML = colors[0];
     document.getElementById("wordB").innerHTML = colors[1];
     document.getElementById("wordC").innerHTML = colors[2];
     document.getElementById("wordD").innerHTML = colors[3];
     document.getElementById("wordE").innerHTML = colors[4];
     document.getElementById("wordF").innerHTML = colors[5];
     document.getElementById("wordG").innerHTML = colors[6];
     document.getElementById("wordH").innerHTML = colors[7];
     document.getElementById("wordI").innerHTML = colors[8];
    
    // generate answer / question
    ans = Math.floor(Math.random() * 9);
    document.getElementById("find").innerHTML = colors[ans];
}

function checkA() { 
    if (ans == "0") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkB() {
    if (ans == "1") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkC() {
    if (ans == "2") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkD() {
    if (ans == "3") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkE() {
    if (ans == "4") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkF() {
    if (ans == "5") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkG() {
    if (ans == "6") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkH() {
    if (ans == "7") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}
function checkI() {
    if (ans == "8") {
        score = score + 5;
        document.getElementById("score").innerHTML = score;
    }
}