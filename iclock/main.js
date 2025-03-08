var now = new Date();
var minutes = now.getMinutes();
var hours = now.getHours();
var setClock = function (h,m) {
    var minutesDeg = m * 6; // 360° / 60 = 6° per minute
    var hoursDeg = (h % 12) * 30 + m / 2; // 360° / 12 = 30° per hour
    var minuteHand = document.getElementById("minute-hand");
    var hourHand = document.getElementById("hour-hand");
    if (!minuteHand || !hourHand) {
        return;
    }
    hourHand.style.setProperty('--rotation', hoursDeg);
    minuteHand.style.setProperty('--rotation', minutesDeg);

};
setClock(hours,minutes);
