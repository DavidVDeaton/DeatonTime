function updateTime () {
    
    var now = moment.utc().format("dddd, MMMM Do, YYYY, h:mm:ss A");
  
    $("#currentDay").text(now);

    $("#currentDay2").text(now);

};

setInterval(updateTime, 1000);
updateTime();