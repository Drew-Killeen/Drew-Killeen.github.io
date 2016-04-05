document.addEventListener("keypress", analyze);

function analyze() {
    var input, letter;
    if (/^TEST$/.test(document.getElementById("input").value) === true) {
        input = lotsOfText;
        document.getElementById("input").value = lotsOfText;
    } else {
        input = document.getElementById("input").value;
    }
    for (var i = 0; i < 26; i++) {
        letter = new RegExp(String.fromCharCode(i + 97), "ig");
        if (input.match(letter || {}) == null) {
            window.myBar.datasets[0].bars[i].value = 0;
        } else {
            window.myBar.datasets[0].bars[i].value = input.match(letter || {}).length;
        }
    }
    window.myBar.update();
}

var barChartData = {
    labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    datasets: [
        {
            fillColor: "rgba(220,220,220,0.65)",
            strokeColor: "rgba(220,220,220,0.9)",
            highlightFill: "rgba(220,220,220,0.8)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [8.167, 1.492, 2.782, 4.253, 12.702, 2.228, 2.015, 6.094, 6.966, 0.153, 0.772, 4.025, 2.406, 6.749, 7.507, 1.929, 0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.361, 0.150, 1.974, 0.074]
			}
		]

}

window.onload = function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive: true
    });
}