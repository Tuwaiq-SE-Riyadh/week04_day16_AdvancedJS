function printName(fristname){
   return (fristname)
}
printName();

//arrowfunction
// let printName=(fristname)=>fristname
  
// printName();


//display time
function displayTime(){
   let currentDateTime=new Date();
   document.querySelector("#time").innerHTML=(currentDateTime)
}
   
   setInterval(displayTime,1000)

