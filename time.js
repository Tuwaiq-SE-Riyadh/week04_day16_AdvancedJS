function time()
{
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let timeNow = hour + ":" + minute + ":" + seconds;
    document.querySelector(".time").innerHTML = timeNow;
}
setInterval(time, 1000);