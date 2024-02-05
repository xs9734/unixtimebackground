setInterval(secondTick, 1000);

function secondTick() {
    const ts = Math.round(new Date().getTime() / 1000);
    const hexValue = ts.toString(16).slice(-6);
    
    document.getElementById("hexNum").innerHTML = `Current Time is <br> <br>#${hexValue}`;
    document.body.style.backgroundColor = `#${hexValue}`;
    document.body.style.transition = "all 1s";
}