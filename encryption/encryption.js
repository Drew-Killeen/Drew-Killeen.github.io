/*
 ** Main Encrypt function - Entry point for all encryption and decryption functions 
 */
var cracked = false;

function Encrypt() {
    var key = document.getElementById("key").value,
        txt = document.getElementById("txt").value.toLowerCase().replace(/['"]+/g, ''),
        output;
    if (key.length !== 0 || document.getElementById("piglatin").checked === true || document.getElementById("atbash") === true || document.getElementById("decrypt").checked === false) {
        document.getElementById("cipher").classList.remove("doNotDisplay");
        document.getElementById("cipherBreak").classList.add("doNotDisplay");
        if (document.getElementById("decrypt").checked === true) {
            if (document.getElementById("caesar").checked === true) {
                console.log("Decrypt Caesar");
                output = caesarCipherDecrypt(txt, key);
            } else if (document.getElementById("vigenere").checked === true) {
                console.log("Decypt Vigenere");
                output = vigenereCipherDecrypt(txt, key);
            } else if (document.getElementById("railfence").checked === true) {
                console.log("Decrypt Rail Fence");
                output = railFenceDecrypt(txt, key);
            } else if (document.getElementById("piglatin").checked === true) {
                console.log("Decrypt Pig Latin");
                output = pigLatinDecrypt(txt);
            } else if (document.getElementById("autokey").checked === true) {
                console.log("Decrypt Autokey");
                output = autokeyDecrypt(txt, key);
            } else if (document.getElementById("atbash").checked === true) {
                console.log("Decrypt Atbash");
                output = atbashDecrypt(txt, key);
            }
        } else {
            if (document.getElementById("caesar").checked === true) {
                if (key.length === 0) {
                    key = 13;
                    document.getElementById("cipherBreak").classList.remove("doNotDisplay");
                    document.getElementById("cipherBreak").innerHTML = "Key set to default of 13";
                }
                console.log("Initiating Caesar Cipher");
                output = caesarCipher(txt, key);
            } else if (document.getElementById("vigenere").checked === true) {
                if (key.length === 0) {
                    key = "baz";
                    document.getElementById("cipherBreak").classList.remove("doNotDisplay");
                    document.getElementById("cipherBreak").innerHTML = "Key set to default of baz";
                }
                console.log("Initiating Vigenere Cipher");
                output = vigenereCipher(txt, key);
            } else if (document.getElementById("piglatin").checked === true) {
                console.log("Initiating Pig Latin Translation");
                output = pigLatinEncryption(txt);
            } else if (document.getElementById("railfence").checked === true) {
                if (key.length === 0) {
                    key = 3;
                    document.getElementById("cipherBreak").classList.remove("doNotDisplay");
                    document.getElementById("cipherBreak").innerHTML = "Key set to default of 3";
                }
                console.log("Initiating Rail Fence Cipher");
                output = railFenceCipher(txt, key);
            } else if (document.getElementById("autokey").checked === true) {
                if (key.length === 0) {
                    key = "qux";
                    document.getElementById("cipherBreak").classList.remove("doNotDisplay");
                    document.getElementById("cipherBreak").innerHTML = "Key set to default of qux";
                }
                console.log("Initiating Autokey Cipher");
                output = autokeyCipher(txt, key);
            } else if (document.getElementById("atbash").checked === true) {
                console.log("Initiating Atbash Cipher");
                output = atbashCipher(txt);
            }
        }
        document.getElementById("cipher").value = output;
    } else if (document.getElementById("decrypt").checked === true) {
        document.getElementById("cipher").classList.add("doNotDisplay");
        document.getElementById("cipherBreak").classList.remove("doNotDisplay");
        if (document.getElementById("caesar").checked === true) {
            console.log("Break Caesar Cipher");
            if (txt.length > 600) {
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
            } else {
                output = ""
                for (i = 0; i < 26; i++) {
                    output += "<tr><td>Key of " + i + ":</td><td>" + caesarCipherDecrypt(txt, i) + "</td></tr>";
                }
            }
        }
        document.getElementById("cipherBreak").innerHTML = output;
    }
}

/* 
 **
 ** Caesar Cipher 
 **
 */

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
    if (cases > 3) {
        return input;
    } else {
        return false;
    }
}

/*
 **
 ** Vigenere Cipher 
 **
 */

/* Encrypt */
function vigenereCipher(plaintext, k) {
    var output = "",
        key, print, c, i, j;
    plaintext = plaintext.split("");
    for (i = 0, j = 0; i < plaintext.length; i++) {
        if (j >= k.length) {
            j = 0;
        }
        key = k.charCodeAt(j);
        if (/^[A-Z]+$/.test(k.charAt(j))) {
            key -= 65;
        } else if (/^[a-z]+$/.test(k.charAt(j))) {
            key -= 97;
        }
        c = plaintext[i].charCodeAt(0);
        if (/^[a-z]+$/.test(plaintext[i].charAt(0))) {
            print = (c - 97 + key) % 26 + 97;
            output += String.fromCharCode(print);
            j++;
        } else {
            output += plaintext[i].charAt(0);
        }
    }
    return output;
}

/*Decrypt*/
function vigenereCipherDecrypt(plaintext, k) {
    var output = "",
        key, print, c, i, j;
    plaintext = plaintext.split("");
    for (i = 0, j = 0; i < plaintext.length; i++) {
        if (j >= k.length) {
            j = 0;
        }
        key = k.charCodeAt(j);
        if (/^[A-Z]+$/.test(k.charAt(j))) {
            key -= 65;
        } else if (/^[a-z]+$/.test(k.charAt(j))) {
            key -= 97;
        }
        c = plaintext[i].charCodeAt(0);
        if (/^[a-z]+$/.test(plaintext[i].charAt(0))) {
            print = (c - 19 - key) % 26 + 97;
            output += String.fromCharCode(print);
            j++;
        } else {
            output += plaintext[i].charAt(0);
        }
    }
    return output;
}

/* 
 **
 ** Pig Latin Translator 
 **
 */

/* Encrypt */
function pigLatinEncryption(plaintext) {
    var output = "",
        first, text = plaintext.split(" "),
        i;
    for (i = 0; i < text.length; i++) {
        first = text[i].slice(0, 1);
        if (/[aeiouy]/i.test(first)) {
            text[i] += "way";
        } else if (/[bcdfghjklmnpqrstvwxy]/i.test(first)) {
            text[i] = text[i].replace(/\b([bcdfghjklmnpqrstvwxy]+)([a-z]*)\b/gi, "$2$1ay");
        }
    }
    output = text.join(" ");
    return output;
}

/* Decrypt */
function pigLatinDecrypt(plaintext) {
    var output = "",
        last, text = plaintext.split(" "),
        i;
    for (i = 0; i < text.length; i++) {
        if (/way$/.test(text[i])) {
            text[i] = text[i].replace(/way$/, "");
        } else if (/ay$/.test(text[i])) {
            text[i] = text[i].replace(/ay$/, "");
        }
    }
    output = text.join(" ");
    return "Pig Latin decryption is not yet functional";
}

/*
 **
 ** Rail Fence Cipher 
 **
 */

/* Encrypt */
function railFenceCipher(plaintext, key) {
    var skip, j, i, line, output = "";
    plaintext = plaintext.replace(/\W/g, '');
    if (key > Math.floor(2 * (plaintext.length - 1))) {
        alert("key is too large for the plaintext length.");
        return;
    }
    for (line = 0; line < key - 1; line++) {
        skip = 2 * (key - line - 1);
        j = 0;
        for (i = line; i < plaintext.length;) {
            output += plaintext.charAt(i);
            if ((line === 0) || (j % 2 === 0)) i += skip;
            else i += 2 * (key - 1) - skip;
            j++;
        }
    }
    for (i = line; i < plaintext.length; i += 2 * (key - 1)) output += plaintext.charAt(i);
    return output;
}

/* Decrypt */
function railFenceDecrypt(text, key) {
    plaintext = text.replace(/\W/g, '');
    if (key > Math.floor(2 * (text.length - 1))) {
        alert("key is too large for the ciphertext length.");
        return;
    }
    pt = new Array(text.length);
    k = 0;
    for (line = 0; line < key - 1; line++) {
        skip = 2 * (key - line - 1);
        j = 0;
        for (i = line; i < text.length;) {
            pt[i] = text.charAt(k++);
            if ((line === 0) || (j % 2 === 0)) i += skip;
            else i += 2 * (key - 1) - skip;
            j++;
        }
    }
    for (i = line; i < text.length; i += 2 * (key - 1)) pt[i] = text.charAt(k++);
    return pt.join("");
}
0

/*
 **
 ** Autokey Cipher 
 **
 */

/* Encrypt */
function autokeyCipher(plaintext, key) {
    var output = "",
        print, c, k;
    plaintext = plaintext.split("");
    key = key.replace(/\W\D/g, "");
    for (var i = 0, j = key.length; j < plaintext.length; i++, j++) {
        if (/^[A-Za-z]+$/.test(plaintext[i])) {
            key += plaintext[i];
        } else {
            j--;
        }
    }
    for (i = 0, j = 0; j < plaintext.length; i++, j++) {
        if (/^[A-Za-z]+$/.test(plaintext[i].charAt(0))) {
            k = key.charCodeAt(i);
            if (/^[A-Z]+$/.test(key.charAt(i))) {
                k -= 65;
            } else if (/^[a-z]+$/.test(key.charAt(i))) {
                k -= 97;
            }
            c = plaintext[j].charCodeAt(0);
            if (/^[a-z]+$/.test(plaintext[j].charAt(0))) {
                print = (c - 97 + k) % 26 + 97;
                output += String.fromCharCode(print);
            }
        } else {
            output += plaintext[j].charAt(0);
            i--;
        }
    }
    return output;
    //return "error";
}

/* 
 **
 ** Atbash Cipher 
 **
 */

/* Encrypt */
function atbashCipher(plaintext) {
    var print;
    plaintext = plaintext.split("");
    for (var i = 0; i < plaintext.length; i++) {
        if (/^[a-m]+$/.test(plaintext[i])) {
            print = 219 - plaintext[i].charCodeAt(0);
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[n-z]+$/.test(plaintext[i])) {
            print = 97 + (122 - plaintext[i].charCodeAt(0));
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[A-M]+$/.test(plaintext[i])) {
            print = 155 - plaintext[i].charCodeAt(0);
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[N-Z]+$/.test(plaintext[i])) {
            print = 65 + (90 - plaintext[i].charCodeAt(0));
            plaintext[i] = String.fromCharCode(print);
        }
    }
    plaintext = plaintext.join("");
    return plaintext;
}

/* Decrypt */
function atbashDecrypt(plaintext) {
    var print;
    plaintext = plaintext.split("");
    for (var i = 0; i < plaintext.length; i++) {
        if (/^[a-m]+$/.test(plaintext[i])) {
            print = 219 - plaintext[i].charCodeAt(0);
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[n-z]+$/.test(plaintext[i])) {
            print = 97 + (122 - plaintext[i].charCodeAt(0));
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[A-M]+$/.test(plaintext[i])) {
            print = 155 - plaintext[i].charCodeAt(0);
            plaintext[i] = String.fromCharCode(print);
        } else if (/^[N-Z]+$/.test(plaintext[i])) {
            print = 65 + (90 - plaintext[i].charCodeAt(0));
            plaintext[i] = String.fromCharCode(print);
        }
    }
    plaintext = plaintext.join("");
    return plaintext;
}