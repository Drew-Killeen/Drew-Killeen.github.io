var d, j = 0,
    l = 0,
    start = false,
    wordlist = new Array,
    correctwords = 0,
    wrongwords = 0,
    txt = "",
    testlength = 60,
    output;
document.getElementById("type").addEventListener("keypress", updateClock);
document.getElementById("type").addEventListener("keypress", function (e) {
    if (32 == e.keyCode) {
        checkWord();
    }
});

function words() {
    var words = ["time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "company", "number", "group", "problem", "fact"];
    var rowLength = 0;
    var textLength = 0;
    var rowNum = 0;
    output = "<span id='row0'>";
    for (var i = 0; i <= testlength * 3; i++) {
        if (rowLength > 48) {
            output += "</span><br><span class='doNotDisplay' id='row" + rowNum + "'>"
            textLength += rowLength;
            rowLength = 0;
            rowNum++;
        }
        wordlist[i] = words[Math.floor((Math.random() * 25))];
        rowLength += wordlist[i].length;
        output += '<span id="word' + i + '">' + wordlist[i] + "</span> ";
    }
    output += '</span>'
    document.getElementById("type_me").innerHTML = output;
    document.getElementById("word0").classList.add("highlight");
    document.getElementById("row1").classList.remove("doNotDisplay");
    document.getElementById("row2").classList.remove("doNotDisplay");
    var style = document.createElement('style');
    style.type = 'text/css';
    for (var i = 0; i < (wordlist.length * 3) / 10; i++) {
        style.innerHTML += '.currentrow' + i + ' {position:relative;top:-' + i * 49 + 'px;} ';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

/* 
 ** Add words function - still in progress. Will finish when it becomes a priority.
 */
function addWords() {
    for (var i = 0; i <= testlength * 3; i++) {
        if (i % 10 === 0 && i !== 0) {
            output += "</span><br><span class='doNotDisplay' id='row" + i / 10 + "'>"
        }
        wordlist[i] = words[Math.floor((Math.random() * 25))];
        output += '<span id="word' + i + '">' + wordlist[i] + "</span> ";
    }
}

function updateClock() {
    testlength = Number(document.getElementById("testLength").value);
    if (testlength < 1 || testlength === NaN) {
        testlength = 60;
    }
    if (start === false) {
        document.getElementById("type").removeEventListener("keypress", updateClock);
    }
    start = true;
    var time = testlength - j;
    j++;
    document.getElementById("clock").innerHTML = time + " seconds";
    if (j < testlength + 1) {
        setTimeout(updateClock, 1000);
    } else {
        endTest();
    }
}

function checkWord() {
    txt += document.getElementById("type").value;
    document.getElementById("type").value = "";
    document.getElementById("word" + l).classList.remove("highlight");
    l++;
    document.getElementById("word" + l).classList.add("highlight");
    if (l % 10 === 0 && l !== 0) {
        document.getElementById("type_me").classList.remove("currentrow" + (l / 10 - 1));
        document.getElementById("type_me").classList.add("currentrow" + l / 10);
        document.getElementById("row" + (l / 10 + 2)).classList.remove("doNotDisplay");
        document.getElementById("row" + (l / 10 - 1)).classList.add("doNotDisplay");
    }
}

function endTest() {
    txt = txt.split(" ");
    for (var i = 0; i < txt.length; i++) {
        if (txt[i] == wordlist[i]) {
            correctwords++;
        } else {
            wrongwords++;
        }
    }
    document.getElementById("clock").innerHTML = "Test completed... " + correctwords * (60 / testlength) + " WPM";
}