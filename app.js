var intervlID = window.setInterval(secondTick, 1000);

function secondTick() {
    var ts = Math.round((new Date()).getTime() / 1000);
    console.log(ts);
    //document.getElementById("number").innerHTML = ts;
    var num = ts;
    var n = num.toString();
    var id = n;
    var hexValue = id.substr(id.length - 6);
    document.getElementById("hexNum").innerHTML = "Current Time is <br> <br>" + "#" + hexValue;
    document.body.style.backgroundColor = "#" + hexValue;
    document.body.style.transition = "all 1s";
}


