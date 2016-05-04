/*
 ** General scripts; excludes ciphers
 */

document.getElementById("backward").addEventListener("click", Backward);
document.getElementById("forward").addEventListener("click", Forward);

var disableKey = false;

document.getElementById("submit").addEventListener("click", Encrypt);
document.getElementById("switch").addEventListener("click", Switch);
document.getElementById("expandInput").addEventListener("click", Expand);

function Instructions() {
    $(".instructionsMain").slideToggle(800, "linear");
}

function explain(type) {
    $(".instructions" + type).slideToggle(800, "linear");
}

function configureCaesar() {
    document.getElementById("key").disabled = false;
    document.getElementById("key").placeholder = "13";
}

function configureVigenere() {
    document.getElementById("key").disabled = false;
    document.getElementById("key").placeholder = "baz";
}

function configureRailFence() {
    document.getElementById("key").disabled = false;
    document.getElementById("key").placeholder = "3";
}

function configureAutokey() {
    document.getElementById("key").disabled = false;
    document.getElementById("key").placeholder = "qux";
}

function Backward() {
    document.getElementById("submit").innerHTML = "Decrypt";
    if (document.getElementById("piglatin").checked === true) {
        document.getElementById("key").placeholder = "disabled";
    } else if (document.getElementById("caesar").checked === true) {
        document.getElementById("key").placeholder = "13";
    } else if (document.getElementById("vigenere").checked === true) {
        document.getElementById("key").placeholder = "baz";
    } else if (document.getElementById("railfence").checked === true) {
        document.getElementById("key").placeholder = "3";
    } else if (document.getElementById("autokey").checked === true) {
        document.getElementById("key").placeholder = "qux";
    } else {
        document.getElementById("key").placeholder = "key";
    }
}

function Forward() {
    document.getElementById("submit").innerHTML = "Encrypt";
    if (document.getElementById("caesar").checked === true) {
        document.getElementById("key").placeholder = "13";
    } else if (document.getElementById("vigenere").checked === true) {
        document.getElementById("key").placeholder = "baz";
    } else if (document.getElementById("piglatin").checked === true) {
        document.getElementById("key").placeholder = "disabled";
    } else if (document.getElementById("railfence").checked === true) {
        document.getElementById("key").placeholder = "3";
    } else if (document.getElementById("autokey").checked === true) {
        document.getElementById("key").placeholder = "qux";
    } else {
        document.getElementById("key").defaultValue = "";
    }
    disableKey = false;
}

function noKey() {
    document.getElementById("key").disabled = true;
    document.getElementById("key").placeholder = "disabled";
}

function Switch() {
    var output = document.getElementById("cipher").value;
    document.getElementById("txt").value = output;
}

function Expand() {
    if (document.getElementById("expandInput").innerHTML == "(+)") {
        document.getElementById("expandInput").innerHTML = "(-)"
        document.getElementById("expandInput").classList.remove("expandInput");
        document.getElementById("expandInput").classList.add("collapseInput");
    } else {
        document.getElementById("expandInput").innerHTML = "(+)"
        document.getElementById("expandInput").classList.add("expandInput");
        document.getElementById("expandInput").classList.remove("collapseInput");
    }
}

$(".expandInput").click(function () {
    $("#txt").animate({
        width: "400%"
    }, 1500, function () {});
});

$(".collapseInput").click(function () {
    $("#txt").animate({
        width: "100%"
    }, 1500, function () {});
});