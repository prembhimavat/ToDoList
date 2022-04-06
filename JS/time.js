// function realTimeClock(){

//     var dt = new Date();

//     var hours = dt.getHours();
//     var minutes = dt.getMinutes();
//     var seconds = dt.getSeconds();

//     var aMpM = (hours < 12 ) ? "AM" : "PM";

//     hours = (hours>12)? (hours-12):hours;

//     document.getElementById("datetime").innerHTML = hours + ":" + minutes + ":" + seconds + aMpM;
    
//     var t = setTimeout(realTimeClock,500);
// }

function realTimeClock(){
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
    var t = setTimeout(realTimeClock,500);
}