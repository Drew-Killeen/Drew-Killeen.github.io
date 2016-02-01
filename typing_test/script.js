document.getElementById("type").autofocus = true;
function words() {
    var words = ["time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "company", "number", "group", "problem", "fact"],
        output = "", 
        i;
    for(i = 0; i <= 200; i++) {
        if(i % 10 === 0) {
            output += "<br>"
        }
        output += words[Math.floor((Math.random() * 25) + 1)] + " ";
        document.getElementById("type_me").innerHTML = output;
    }
}