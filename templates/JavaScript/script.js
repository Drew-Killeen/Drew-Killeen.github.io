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
 ** Outputs your name backwards
 */

function reverseName(name) {
    return name.split('').reverse().join('');

}

/*
 ** A needle in the haystack (from codwars.com)
 */

var haystack1 = ["hay", "hay", "hay", "needle", "hay", "hay"],
    /* position 3 */
    haystack2 = ["hay", "hay", "hay", "hay", "hay", "hay", "hay", "needle", "hay"],
    /* position 7 */
    haystack3 = ["hay", "needle", "hay", "hay", "hay", "cowpoop", "hay"]; /* position 1 */

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

/*
 ** Count the number of times the for loop has been run
 */

function count() {
    for (var i = 0; i < 8; i++) {
        console.log(i + 1);
    }
}

function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    document.getElementById("output").innerHTML = plaintext;
}