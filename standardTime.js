var deatonSec = 0;
var deatonMin = 0;
var deatonHour = 0;

function updateTime () {

    var date = moment.utc().format("dddd, MMMM Do, YYYY")
    
    var now = moment.utc().format("HH:mm:ss");
  
    $("#currentTime").text(now);

    $("#currentDate").text(date);
};

setInterval(updateTime, 1000);
updateTime();


function getDeatonTime () {

    var hour = moment.utc().format("HH");

    var minute = moment.utc().format("mm");

    var second = moment.utc().format("ss");

    var deatonTime = ((hour*3600) + (minute*60) + second*1)/8640;

    console.log (deatonTime);

    deatonHour = Math.floor(deatonTime);

    deatonMinutes = (deatonTime - deatonHour)*100;

    deatonMin = Math.floor((deatonTime - deatonHour)*100);

    deatonSec = Math.round((deatonMinutes - deatonMin)*100);

    $("#currentTime2").text("0" + deatonHour + ":" + deatonMin + ":" + deatonSec);

};

function updateDeatonTime () {

    deatonSec++;

    if (deatonSec > 99) {
        deatonSec = 0;
        deatonMin++;
    }

    if (deatonMin > 99) {
        deatonMin = 0;
        deatonHour++;
    }

    if (deatonHour > 9) {
        deatonHour = 0;
    }

    if (deatonSec < 10) {

        var displayDeatonSec = "0" + deatonSec;  
    }

    else {
        displayDeatonSec = deatonSec;
    }

    if (deatonMin < 10) {

        var displayDeatonMin = "0" + deatonMin;  
    }

    else {
        displayDeatonMin = deatonMin;
    }

    $("#currentTime2").text("0" + deatonHour + ":" + displayDeatonMin + ":" + displayDeatonSec);
    

}



setInterval(updateTime, 1000);
updateTime();
getDeatonTime ();
setInterval(updateDeatonTime, 864);
