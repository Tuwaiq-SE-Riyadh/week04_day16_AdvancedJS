// function printName(fristName){
//    return"my name   "+fristName
   
// }
// document.getElementById("test").innerHTML=printName("dalal");



//arrowfunction
  let printName=(fristName)=> "my name   "+fristName

document.getElementById("test").innerHTML=printName("dalal");



//display time
function displayTime(){
   let currentDateTime=new Date();
   document.querySelector("#time").innerHTML = "time" + currentDateTime
  // return "time"+currentDateTime
}

// console.log(displayTime());
 //setInterval(displayTime(),1000)

//Date & Time
function showTime() {
   const date = new Date();
   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();
   let time = date.toLocaleTimeString();

   let currentDate = `${day}-${month}-${year}`

   document.querySelector("#time").innerText = time;
   setInterval(showTime, 1000);
}
showTime();

   
   

