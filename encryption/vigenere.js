document.getElementById("submit").addEventListener("click", breakVigenereCipher);

function breakVigenereCipher() {
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
        if (numbers[i] % 3 == 0) {
            factors[3][wordLength.three] = 3;
            wordLength.three++;
        }
        if (numbers[i] % 4 == 0) {
            factors[4][wordLength.four] = 4;
            wordLength.four++;
        }
        if (numbers[i] % 5 == 0) {
            factors[5][wordLength.five] = 5;
            wordLength.five++;
        }
        if (numbers[i] % 6 == 0) {
            factors[6][wordLength.six] = 6;
            wordLength.six++;
        }
        if (numbers[i] % 7 == 0) {
            factors[7][wordLength.seven] = 7;
            wordLength.seven++;
        }
        if (numbers[i] % 8 == 0) {
            factors[8][wordLength.eight] = 8;
            wordLength.eight++;
        }
    }

    console.log(factors.sort(function (a, b) {
        return b.length - a.length
    }));
    key = 3;
    for (var i = 0; i <= input.length / key; i++) {
        
    }
}