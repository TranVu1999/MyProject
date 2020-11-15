// Setting countdown
var countDate = new Date('Jan 1, 2021 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day))
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('days').innerText = d + ' Days';
    document.getElementById('hours').innerText = h + ' Hours';
    document.getElementById('minutes').innerText = m + ' Minutes';
    document.getElementById('seconds').innerText = s + ' Secs';
}


setInterval(function () {
    newYear();
}, 1000);

