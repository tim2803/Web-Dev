var outputElement = document.getElementById("result1");

function run_example01() {
    var bigger = parseInt(document.getElementById("first-tb").value);
    var smaller = parseInt(document.getElementById("second-tb").value);

    if (smaller > bigger) {
        bigger = smaller;
    }

    outputElement.innerHTML = "The greater number is: " + bigger;
}

function run_example02() {
    var s = document.getElementById("first-tb").value;
    var number = parseInt(s);

    if (typeof(number) === "number") {
        if (number % 2 == 0) {
            outputElement.innerHTML = "This number is even.";
        } else {
            outputElement.innerHTML = "This number is odd.";
        }
    } else {
        outputElement.innerHTML = "Not a number";
    }

}

function run_example03() {
    var x = document.getElementById("first-tb").value;
    var number = parseFloat(x);
    var res;
    if ((-2 <= number) && (number < 2)) {
        res = number * number + 4 * number + 5;
        outputElement.innerHTML = "" + res;
    } else {
        res = 1 / (number * number + 4 * number + 5);
        outputElement.innerHTML = "" + res;
    }
}