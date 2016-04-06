document.getElementById("submit").addEventListener("click", vigenereCipherKey);

var allKeys = new Array;

function keyRange() {
    if (document.getElementById("keyRange").value !== "") {
        var input = document.getElementById("keyRange").value.split("-"),
            rangeStart = Number(input[0]),
            rangeEnd = Number(input[1]);
        for (var i = 0; i <= rangeEnd - rangeStart; i++) {
            allKeys[i] = i + rangeStart;
        }
        console.log(allKeys);
    }
    else {
        for (var i = 0; i <= 25; i++) {
            allKeys[i] = i;
        }
    }
}


function vigenereCipherKey() {
    keyRange();
    var input, key,
        keyList = new Array;
    if (/^TEST$/.test(document.getElementById("input").value) === true) {
        input = lotsOfText;
        document.getElementById("input").value = input;
    } else {
        input = document.getElementById("input").value.replace(/[^a-zA-z]/g, "").toUpperCase();
    }
    if (input.length > 2000) {
        alert("Warning: Large amounts will take a long time for your computer to process. It may be worth decrypting a smaller chunk of ciphertext.")
    }
    for (var i = 0; i <= input.length; i++) {
        keyList[i] = input.substr(i, 3);
    }
    var factors = new Array,
        numbers = new Array,
        wordLength = {
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0,
            seven: 0,
            eight: 0
        };
    factors[0] = new Array;
    factors[1] = new Array;
    factors[2] = new Array;
    factors[3] = new Array;
    factors[4] = new Array;
    factors[5] = new Array;
    factors[6] = new Array;
    factors[7] = new Array;
    factors[8] = new Array;
    for (var i = 0, x = 0; i <= keyList.length; i++) {
        for (var j = 0; j <= keyList.length; j++) {
            if (keyList[i] == keyList[j] && i !== j) {
                x++;
                numbers[x] = j - i;
            }
        }
    }
    for (var i = 0; i <= numbers.length; i++) {
        if (allKeys.indexOf(2) !== -1 && numbers[i] % 2 == 0) {
            factors[2][wordLength.two] = 2;
            wordLength.two++;
        }
        if (allKeys.indexOf(3) !== -1 && numbers[i] % 3 == 0) {
            factors[3][wordLength.three] = 3;
            wordLength.three++;
        }
        if (allKeys.indexOf(4) !== -1 && numbers[i] % 4 == 0) {
            factors[4][wordLength.four] = 4;
            wordLength.four++;
        }
        if (allKeys.indexOf(5) !== -1 && numbers[i] % 5 == 0) {
            factors[5][wordLength.five] = 5;
            wordLength.five++;
        }
        if (allKeys.indexOf(6) !== -1 && numbers[i] % 6 == 0) {
            factors[6][wordLength.six] = 6;
            wordLength.six++;
        }
        if (allKeys.indexOf(7) !== -1 && numbers[i] % 7 == 0) {
            factors[7][wordLength.seven] = 7;
            wordLength.seven++;
        }
        if (allKeys.indexOf(8) !== -1 && numbers[i] % 8 == 0) {
            factors[8][wordLength.eight] = 8;
            wordLength.eight++;
        }
    }

    factors = factors.sort(function (a, b) {
        return b.length - a.length
    });

    console.log("The liklihood of the key length is as follows:");
    for (var i = 0; i <= factors.length - 3; i++) {
        console.log(factors[i][0]);
    }
}

function vigenereCipherBreak() {
    key = 3;
    for (var i = 0, letterFrequency = new Array; i < input.length / key; i++) {
        letterFrequency[i] = input.substr(i * key, 1);
    }
}