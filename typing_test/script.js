var d, j = 0,
    l = 0,
    start = false,
    wordlist = new Array,
    correctwords = 0,
    wrongwords = 0,
    txt = "",
    testlength = 60;
document.getElementById("type").addEventListener("keypress", updateClock);
document.getElementById("type").addEventListener("keypress", function (e) {
    if (32 == e.keyCode) {
        checkWord();
    }
});

function words() {
    var words = ["time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "company", "number", "group", "problem", "fact"],
        output = "",
        i;
    for (i = 0; i <= testlength * 3; i++) {
        if (i % 10 === 0 && i !== 0) {
            output += "<br>"
        }
        wordlist[i] = words[Math.floor((Math.random() * 25))];
        output += '<span id="word' + i + '">' + wordlist[i] + "</span> ";
    }
    document.getElementById("type_me").innerHTML = output;
    document.getElementById("word0").classList.add("highlight");
    var style = document.createElement('style');
    style.type = 'text/css';
    for (var i = 0; i < (wordlist.length * 3) / 10; i++) {
        style.innerHTML += '.row' + i + ' {position:relative;top:-' + i * 49 + 'px;} ';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

function updateClock() {
    testlength = Number(document.getElementById("testLength").value);
    if (testlength < 1) {
        testlength = 60;
    } else if (testlength > 60 && start === false) {
        words();
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
        document.getElementById("type_me").classList.remove("row" + (l / 10 - 1));
        document.getElementById("type_me").classList.add("row" + l / 10);
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