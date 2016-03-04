/*
 ** Outputs your name backwards
 */

function reverseName(name) {
    return name.split('').reverse().join('');
}

/*
 ** Correct the errors
 */

function isPositive(input) {
    if (input > 0) {
        return true;
    } else if (input <= 0) {
        return false;
    }
}

/*
 ** A needle in the haystack (from codwars.com)
 */

var haystack1 = ["hay", "hay", "hay", "needle", "hay", "hay"],
    haystack2 = ["hay", "hay", "hay", "hay", "hay", "hay", "hay", "needle", "hay"],
    haystack3 = ["hay", "needle", "hay", "hay", "hay", "cowpoop", "hay"];

function findNeedle(haystack) {
    return "found the needle at position " + (haystack.indexOf("needle") + 1);
}

/*
 ** Count the number of times the for loop has been run
 */

function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    document.getElementById("output").innerHTML = plaintext;
}