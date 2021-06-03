function updateTime () {
    
    var now = moment.utc().format("dddd, MMMM Do, YYYY, HH:mm:ss");
  
    $("#currentDay").text(now);
};

setInterval(updateTime, 1000);
updateTime();

function updateDeatonTime () {

    var hour = moment.utc().format("HH");

    var minute = moment.utc().format("mm");

    var second = moment.utc().format("ss");

    var deatonTime = ((hour*3600) + (minute*60) + second*1)/8640;

    var deatonHour = Math.floor(deatonTime);

    var deatonMin = (deatonTime - deatonHour)*100;

    var deatonSec = (deatonMin - Math.floor(deatonMin))*100;

    $("#currentDay2").text(deatonHour + ":" + Math.floor(deatonMin) + ":" + Math.round(deatonSec));


};

setInterval(updateDeatonTime, 12);
setInterval(updateTime, 1000);
updateDeatonTime ();
updateTime();
