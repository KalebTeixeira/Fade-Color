var intervalVar = undefined;
var r2 = undefined;
var g2 = undefined;
var b2 = undefined;

var r1 = Math.floor(Math.random()*257);
var g1 = Math.floor(Math.random()*257);
var b1 = Math.floor(Math.random()*257);

var bgColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
document.body.style.background = bgColor;

function buttonPress() {
    window.r2 = Math.floor(Math.random()*257);
    window.g2 = Math.floor(Math.random()*257);
    window.b2 = Math.floor(Math.random()*257);

    intervalVar = setInterval(colorFade, 10);
}

function colorFade(){
    if (r1 < r2) {
        r1++;
    }
    else if (r1 > r2) {
        r1--;
    }
    if (g1 < g2) {
        g1++;
    }
    else if (g1 > g2) {
        g1--;
    }
    if (b1 < b2) {
        b1++;
    }
    else if (b1 > b2) {
        b1--;
    }

    bgColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    document.body.style.background = bgColor;

    if (r1 == r2 &&  g1 == g2 && b1 == b2) {
        clearInterval(intervalVar);
        buttonPress();
    }
}
