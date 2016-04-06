/* 
 **
 ** Caesar Cipher 
 **
 */

function doCaesarCipherStuff(txt, output) {
    document.getElementById("cipher").classList.add("doNotDisplay");
    document.getElementById("cipherBreak").classList.remove("doNotDisplay");
    if (document.getElementById("caesar").checked === true) {
        console.log("Break Caesar Cipher");
        console.log("Attempting to crack cipher");
        output = false;
        for (i = 0; i < 26; i++) {
            if (output === false) {
                output = caesarCipherBreak(caesarCipherDecrypt(txt, i));
                if (output !== false) {
                    output = "Key of " + i + "<br><br>" + output;
                }
            }
        }
        if (output === false) {
            output = ""
            for (i = 0; i < 26; i++) {
                output += "<tr><td>Key of " + i + ":</td><td>" + caesarCipherDecrypt(txt, i) + "</td></tr>";
            }
        }
    }
    document.getElementById("cipherBreak").innerHTML = output;
}

/* Encrypt */
function caesarCipher(plaintext, k) {
    var print, i;
    plaintext = plaintext.split("");
    k = Number(k);
    for (i = 0; i < plaintext.length; i++) {
        if (/^[a-z]+$/.test(plaintext[i])) {
            print = plaintext[i].charCodeAt(0);
            print = (print - 97 + k) % 26 + 97;
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[A-Z]+$/.test(plaintext[i])) {
            print = plaintext[i].charCodeAt(0);
            print = (print - 65 + k) % 26 + 65;
            plaintext[i] = String.fromCharCode(print);
        }
    }
    plaintext = plaintext.join("");
    return plaintext;
}

/* Decrypt */
function caesarCipherDecrypt(plaintext, k) {
    var print, i;
    plaintext = plaintext.split("");
    k = Number(k);
    for (i = 0; i < plaintext.length; i++) {
        if (/^[a-z]+$/.test(plaintext[i])) {
            print = plaintext[i].charCodeAt(0) - 97;
            if (print < k) {
                print = (print + 26 - k) % 26 + 97;
            } else {
                print = (print - k) % 26 + 97;
            }
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[A-Z]+$/.test(plaintext[i])) {
            print = plaintext[i].charCodeAt(0) - 65;
            if (print < k) {
                print = (print + 26 - k) % 26 + 65;
            } else {
                print = (print - k) % 26 + 65;
            }
            plaintext[i] = String.fromCharCode(print);
        }
    }
    plaintext = plaintext.join("");
    return plaintext;
}

/* Break */
function caesarCipherBreak(input) {
    var cases = 0;
    if (/the/.test(input)) {
        cases++;
    }
    if (/and/.test(input)) {
        cases++;
    }
    if (/that/.test(input)) {
        cases++;
    }
    if (/have/.test(input)) {
        cases++;
    }
    if (/for/.test(input)) {
        cases++;
    }
    if (/not/.test(input)) {
        cases++;
    }
    if (/with/.test(input)) {
        cases++;
    }
    if (/you/.test(input)) {
        cases++;
    }
    if (/this/.test(input)) {
        cases++;
    }
    if (/but/.test(input)) {
        cases++;
    }
    if ((input.length > 1000 && cases > 4) || (input.length < 600 && cases > 3) || (input.length <= 600 && cases > 2) || (input.length < 250 && cases > 1) || (input.length < 50 && cases > 0)) {
        return input;
    } else {
        return false;
    }
}