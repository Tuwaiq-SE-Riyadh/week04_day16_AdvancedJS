console.log("----------------------------------Timing Events-----------------------------------");


setInterval(function(){
    let time = new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds())
}, 1000);
